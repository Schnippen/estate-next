"use client";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown";
import CityDropdown from "../Dropdown/CityDropdown";
import styles from "../../_styles/SearchForm.module.css";
import Price from "../Dropdown/Price";
import ButtonSearch from "../Buttons/ButtonSearch";
import { useRouter, useSearchParams } from "next/navigation";
interface QueryDetails {
  [key: string]: string;
}
type TSearchForm = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  queryDetails: QueryDetails;
  setQueryDetails: React.Dispatch<React.SetStateAction<QueryDetails>>;
  handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
  renderError: boolean;
};

/* {
  handleSubmit,
  handleInput,
  queryDetails,
  setQueryDetails,
  handleChange,
  renderError,
}: TSearchForm */

function SearchForm() {
  const router = useRouter();
  const [renderError, setRenderError] = useState(false);
  const [queryDetails, setQueryDetails] = useState<QueryDetails>({
    City: "",
    TypeOfRealEstate: "",
    TypeOfTransaction: "",
    PriceFrom: "",
    PriceTo: "",
  });

  const TypeOfRealEstate = [
    { value: "Mieszkanie na sprzedaż", label: "Apartments" },
    { value: "Dom na sprzedaż", label: "Houses" },
    { value: "Komercyjne na sprzedaż", label: "Commercial" },
    { value: "Działka na sprzedaż", label: "Plots" },
    { value: "Garaż na sprzedaż", label: "Garages" },
    { value: "", label: "Any" },
  ];
  const TypeOfTransaction = [
    { value: "pierwotny", label: "Primary" },
    { value: "wtórny", label: "Secondary" },
    { value: "", label: "Any" },
  ];
  const PriceData = [
    { value: 0, label: "Any" },
    { value: 100000, label: "100 000" },
    { value: 150000, label: "150 000" },
    { value: 200000, label: "200 000" },
    { value: 250000, label: "250 000" },
    { value: 300000, label: "300 000" },
    { value: 350000, label: "350 000" },
    { value: 400000, label: "400 000" },
    { value: 450000, label: "450 000" },
    { value: 500000, label: "500 000" },
    { value: 600000, label: "600 000" },
    { value: 800000, label: "800 000" },
    { value: 1000000, label: "1 000 000" },
    { value: 2000000, label: "2 000 000" },
    { value: 4000000, label: "4 000 000" },
  ];
  interface QueryDetails {
    [key: string]: string;
  }

  console.log(queryDetails);
  const handleChange = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setQueryDetails({
        ...queryDetails,
        [ref.current.name]: ref.current.value,
      });
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryDetails({
      ...queryDetails,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    let x = parseInt(queryDetails.PriceFrom);
    let y = parseInt(queryDetails.PriceTo);
    if (x === 0 && y === 0) {
      setRenderError(false);
    } else if (x > y && y === 0) {
      setRenderError(() => false);
    } else if (x > y && y > 0) {
      setRenderError(() => true);
    } else if (x === y) {
      setRenderError(() => true);
    } else {
      setRenderError(() => false);
    }
  }, [queryDetails.PriceFrom, queryDetails.PriceTo]);

  //creating query
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");

    let updatedQueryString = "";

    if (queryDetails.City.length > 0) {
      updatedQueryString += `city=${queryDetails.City}&`;
    }
    if (queryDetails.TypeOfRealEstate.length > 0) {
      updatedQueryString += `estate=${queryDetails.TypeOfRealEstate}&`;
    }
    if (queryDetails.TypeOfTransaction.length > 0) {
      updatedQueryString += `market=${queryDetails.TypeOfTransaction}&`;
    }
    if (queryDetails.PriceFrom.length > 0) {
      updatedQueryString += `from=${queryDetails.PriceFrom}&`;
    }
    if (queryDetails.PriceTo.length > 0) {
      updatedQueryString += `to=${queryDetails.PriceTo}&`;
    }

    // Remove the trailing "&" from the string
    const finalQueryString = updatedQueryString.slice(0, -1);
    //console.log(finalQueryString);

    const route =
      finalQueryString.length > 0 ? `/offers/?${finalQueryString}` : "/offers";

    //console.log(route, updatedQueryString);

    router.push(route);
  };

  return (
    <form className={styles.searchbar} onSubmit={(e) => handleSubmit(e)}>
      <span className={styles.searchbarSpan}>
        <div className={styles.dropdown}>
          <CityDropdown
            handleInput={handleInput}
            queryDetails={queryDetails}
            setQueryDetails={setQueryDetails}
          />
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            data={TypeOfRealEstate}
            name={"TypeOfRealEstate"}
            handleChange={handleChange}
            placeholder={"Property Type"}
            label={"Property Type"}
          ></Dropdown>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            data={TypeOfTransaction}
            name={"TypeOfTransaction"}
            handleChange={handleChange}
            placeholder={"Type of Market"}
            label={"Type of Market"}
          ></Dropdown>
        </div>
        <div
          className={styles.dropdown}
          style={{
            width: "320px",
            boxShadow: renderError ? "0px 0px 11px 1px red" : "none",
          }}
        >
          <label htmlFor="">Price in zł</label>
          <Price data={PriceData} handleChange={handleChange} />
        </div>
        <div className={styles.searchButton}>
          <ButtonSearch
            type={"submit"}
            onClick={handleSubmit}
            disabled={renderError}
          >
            <HiSearch />
          </ButtonSearch>
        </div>
      </span>
    </form>
  );
}

export default SearchForm;
