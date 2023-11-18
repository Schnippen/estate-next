"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? "5";
  console.log("pagination:", limit, page);
  return (
    <nav>
      <button
        onClick={() => {
          router.push(
            `/offers/?page=${Number(page) - 1}&limit=${Number(limit)}`
          );
        }}
      >
        Previous
      </button>
      Pagination
      <button
        onClick={() => {
          router.push(
            `/offers/?page=${Number(page) + 1}&limit=${Number(limit)}`
          );
        }}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
