"use client";
import React, { useState } from "react";
import styles from "../../_styles/ItemSideArticleCredit.module.css";
import CreateFormInput from "../Forms/CreateFormInput";
import Dropdown from "../Dropdown/Dropdown";
function ItemSideArticleCreditForm() {
  type TCredit = {
    loanAmount: number;
    interestRate: number;
    loanTermInYears: number;
  };

  const [credit, setCredit] = useState<TCredit>({
    loanAmount: 0,
    loanTermInYears: 0,
    interestRate: 4.5,
  });

  const [result, setResult] = useState<number>(0);

  const handleResult = ({
    loanAmount,
    interestRate,
    loanTermInYears,
  }: {
    loanAmount: number;
    interestRate: number;
    loanTermInYears: number;
  }): void => {
    const monthlyPayment = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      loanTermInYears
    );
    setResult(monthlyPayment);
  };

  function calculateMonthlyPayment(
    loanAmount: number,
    interestRate: number,
    loanTermInYears: number
  ) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermInYears * 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const result = Math.ceil(monthlyPayment);
    return result;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCredit({ ...credit, [e.target.name]: e.target.value });
  };
  const handleMax = (e: React.ChangeEvent<HTMLInputElement>, limit: number) => {
    setCredit({
      ...credit,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const creditValueData = {
    label: "Property Value",
    name: "loanAmount",
    placeholder: "Property Value",
    labelText: "Property Value in PLN",
    f: handleKeyDown,
    limit: 14,
  };

  const creditData = {
    data: [
      { value: 5, label: "5 years" },
      { value: 10, label: "10 years" },
      { value: 15, label: "15 years" },
      { value: 20, label: "20 years" },
      { value: 25, label: "25 years" },
      { value: 30, label: "30 years" },
    ],
  };
  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setCredit({
        ...credit,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  return (
    <>
      <div className={styles.credit_wrapper}>
        <div className={styles.credit_input_wrapper}>
          <CreateFormInput
            data={creditValueData}
            handleChange={handleChange}
            handleMax={handleMax}
          />
        </div>
        <div className={styles.credit_input_wrapper}>
          <Dropdown
            data={creditData.data}
            name={"loanTermInYears"}
            handleChange={handleDropdown}
            placeholder={"Loan term"}
            label={"Loan term"}
          />
        </div>
      </div>
      <div className={styles.credit_submit}>
        <input
          type="submit"
          className={styles.submit}
          value="Calculate"
          onClick={(e) => {
            console.warn(
              "calculated",
              calculateMonthlyPayment(
                credit.loanAmount,
                credit.interestRate,
                credit.loanTermInYears
              )
            );
            handleResult({
              loanAmount: credit.loanAmount,
              interestRate: credit.interestRate,
              loanTermInYears: credit.loanTermInYears,
            });
            e.preventDefault();
          }}
          disabled={credit.loanAmount && credit.loanTermInYears ? false : true}
        />
      </div>
    </>
  );
}

export default ItemSideArticleCreditForm;
