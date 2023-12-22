"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Link from "next/link";

function Pagination({ numberOfPages }: { numberOfPages: number }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? "5";
  const params = {
    city: searchParams.get("city") ?? "",
    estate: searchParams.get("estate") ?? "",
    market: searchParams.get("market") ?? "",
    from: searchParams.get("from") ?? "",
    to: searchParams.get("to") ?? "",
  };
  //console.log("pagination:", limit, page, params);
  const [urlPath, setUrlPath] = useState("");
  useEffect(() => {
    //console.log("USE EFFECT RUN", page);
    let updatedQueryString = "";
    if (params.city.length > 0) {
      updatedQueryString += `city=${params.city}&`;
    }
    if (params.estate.length > 0) {
      updatedQueryString += `estate=${params.estate}&`;
    }
    if (params.market.length > 0) {
      updatedQueryString += `market=${params.market}&`;
    }
    if (params.from.length > 0) {
      updatedQueryString += `from=${params.from}&`;
    }
    if (params.to.length > 0) {
      updatedQueryString += `to=${params.to}&`;
    }
    setUrlPath(updatedQueryString);
  }, [page, params.city, params.estate, params.market, params.from, params.to]);

  //console.log(`page=${Number(page) + 1}&limit=${Number(limit)}`);

  const disablePrevious = Number(page) <= 1;
  const disableNext = Number(page) === numberOfPages;
  const PreviousButton = () => {
    return (
      <li>
        <Link
          href={{
            pathname: "/offers/",
            query: `${urlPath}page=${Number(page) - 1}&limit=${Number(limit)}`,
          }}
        >
          <button
            className={styles.pagination__list_btn}
            /* onClick={() => {
              router.push(`?page=${Number(page) - 1}&limit=${Number(limit)}`);
            }} */
            disabled={disablePrevious}
          >
            {" "}
            <HiArrowLeft />
          </button>
        </Link>
      </li>
    );
  };
  const NextButton = () => {
    return (
      <li>
        <Link
          href={{
            pathname: "/offers/",
            query: `${urlPath}page=${Number(page) + 1}&limit=${Number(limit)}`,
          }}
        >
          <button
            className={styles.pagination__list_btn}
            /*  onClick={() => {
            router.push(`?page=${Number(page) + 1}&limit=${Number(limit)}`);
          }} */
            disabled={disableNext}
          >
            <HiArrowRight />
          </button>
        </Link>
      </li>
    );
  };

  return (
    <nav className={styles.pagination}>
      <ul className={styles.pagination__list}>
        <PreviousButton />
        <li>...</li>
        <li
          className={styles.pagination__list_middle_btn}
        >{`${page}/${numberOfPages}`}</li>
        <li>...</li>
        <NextButton />
      </ul>
    </nav>
  );
}

export default Pagination;
