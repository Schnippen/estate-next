"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styles from "./Pagination.module.css"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function Pagination({numberOfPages}:{numberOfPages:number}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? "5";
  console.log("pagination:", limit, page);

  const disablePrevious = Number(page)<=1;
  const disableNext=Number(page)===numberOfPages

  return (
<nav className={styles.pagination}>
          <ul className={styles.pagination__list}>
            <li>
            <button className={styles.pagination__list_btn}
            onClick={() => {
          router.push(
            `/offers/?page=${Number(page) - 1}&limit=${Number(limit)}`
          );
        }} disabled={disablePrevious}
      >                <HiArrowLeft />
      </button>
            </li>
            <li>
              {`${page}/${numberOfPages}`}
            </li>
            <li>
            <button className={styles.pagination__list_btn}
        onClick={() => {
          router.push(
            `/offers/?page=${Number(page) + 1}&limit=${Number(limit)}`
          );
        }} disabled={disableNext}
      >
        <HiArrowRight />
      </button>
            </li>
      </ul>
    </nav>
  );
}

export default Pagination;
/* 
<button
        onClick={() => {
          router.push(
            `/offers/?page=${Number(page) - 1}&limit=${Number(limit)}`
          );
        }}
      >
        Previous
      </button>
      {page}/{numberOfPages}
      <button
        onClick={() => {
          router.push(
            `/offers/?page=${Number(page) + 1}&limit=${Number(limit)}`
          );
        }}
      >
        Next
      </button> */

/* 
<nav className={styles.pagination}>
          <ul className={styles.pagination__list}>
            <li>
              <button
                className={styles.pagination__list_btn}
                disabled={
                  isLoading || currentPage <= 0 || currentPage < pages[0]
                }
                onClick={handlePrevButton}
              >
                <HiArrowLeft />
              </button>
              <button
                className={styles.pagination__list_btn}
                onClick={handleFirstButton}
                disabled={isLoading || pages[0] === undefined}
              >
                {pages[0] === undefined ? null : pages[0]}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage < pages[1] ||pages[1]===undefined }
                onClick={handlePrevMinusOneButton}
              >
                {currentPage < pages[1] || pages[1] === undefined
                  ? null
                  : currentPage - 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={
                  isLoading || pages[0] === undefined || currentPage < pages[0]
                }
                onClick={handlePrevButton}
              >
                {currentPage < pages[0] || pages[0] === undefined
                  ? null
                  : currentPage}
              </button>
              <button className={styles.pagination__list_btn}>
                {currentPage + 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage >= pages.length - 0}
                onClick={handleNextButton}
              >
                {currentPage >= pages.length - 0 ? null : currentPage + 2}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage > pages.length - 2}
                onClick={handleNextPlusOneButton}
              >
                {currentPage > pages.length - 2 ? null : currentPage + 3}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className={styles.pagination__list_btn}
                onClick={handleLastButton}
                style={{ fontSize: pages.length > 3 ? "0.7em" : "600" }}
                disabled={isLoading || pages.length === 0}
              >
                {pages.length > 0 ? pages.length + 1 : null}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage === pages.length}
                onClick={handleNextButton}
              >
                <HiArrowRight />
              </button>
            </li>
          </ul>
        </nav> */