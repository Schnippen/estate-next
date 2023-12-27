import React from "react";
import styles from "../../_styles/ItemSideArticleCredit.module.css";
//import Dropdown from "../Dropdown";
//import CreateFormInput from "../CreateForm/CreateFormInput";
//import { useState } from "react";
import Image from "next/image";
import bank1 from "../../../public/banks/alior.png";
import bank2 from "../../../public/banks/bgz.png";
import bank3 from "../../../public/banks/bos.png";
import bank4 from "../../../public/banks/bps.png";
import bank5 from "../../../public/banks/citi_handlowy.png";
import bank6 from "../../../public/banks/ing.png";
import bank7 from "../../../public/banks/mbank.png";
import bank8 from "../../../public/banks/millennium.png";
import bank9 from "../../../public/banks/pekao.png";
import bank10 from "../../../public/banks/pko_bp.png";
import bank11 from "../../../public/banks/santander.png";
import ItemSideArticleCreditForm from "./ItemSideArticleCreditForm";
function ItemSideArticleCredit() {
  const bankArray = [
    bank1,
    bank2,
    bank3,
    bank4,
    bank5,
    bank6,
    bank7,
    bank8,
    bank9,
    bank10,
    bank11,
  ];

  const FirstBankArray = () => {
    return bankArray
      .slice(0, 6)
      .map((item) => <Image width={36} height={36} src={item} alt="" />);
  };
  const SecondBankArray = () => {
    return bankArray
      .slice(6)
      .map((item) => <Image width={36} height={36} src={item} alt="" />);
  };

  return (
    <form className={styles.section_container_credit}>
      <header>
        <h3>Choose the best one</h3>
      </header>
      <ItemSideArticleCreditForm />
      <div className={styles.bankWrapper}>
        <h6>available bank offers</h6>
        <div className={styles.bankWrapper_List}>
          <FirstBankArray />
        </div>
        <div className={styles.bankWrapper_List}>
          <SecondBankArray />
        </div>
      </div>
    </form>
  );
}

export default ItemSideArticleCredit;
