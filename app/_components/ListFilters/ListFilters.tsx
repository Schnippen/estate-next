"use client";
import React, { useEffect, useState } from "react";
import styles from "../../_styles/Offers.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function ListFilters() {
  const [state, setState] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  console.log("SEARCH PARAMS:", searchParams);
  console.log("PathNAME:", pathname);
  const url = `${pathname}?${searchParams}`;
  console.log("URL:", url);

  const SortPrice = [
    { value: "", label: "Default" },
    { value: "ascend", label: "Price: Low to High" },
    { value: "descent", label: "Price: High to Low" },
    /*   { value: 4, label: "Lowest Price per m²" },
  { value: 5, label: "Highest Price per m²" }, */
  ];
  `order=${state}`;
  /*   useEffect(() => {
    // This code will run after the state has been updated
    console.log("STATE", state);
  }, [state]); */
  const handleSorting = (ref: React.RefObject<HTMLInputElement>) => {
    setState(ref.current!.value);
    console.log("Selected Value:", ref.current!.value);
    console.log("STATE:", state);
    let url = `${pathname}?${searchParams}`;
    let snippet = `order=${state}`;
    let urlSorted = `${pathname}?${searchParams}?${snippet}`;
    if (state !== "") {
      router.push(urlSorted);
      console.log(urlSorted);
    } else {
      router.push(url);
      console.log(urlSorted);
    }
  };
  return (
    <section className={styles.section_filter}>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          data={SortPrice}
          placeholder={"Sort by"}
          handleChange={handleSorting}
        ></Dropdown>
      </div>
    </section>
  );
}

export default ListFilters;
