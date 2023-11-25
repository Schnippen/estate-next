import type { Metadata } from "next";
import React from "react";
import { fetchData } from "../_utils/fetchData";
import { supabase } from "../_utils/superbaseClient";
import styles from "../_styles/Offers.module.css";
import ListingItem from "../_components/ListItem/ListingItem";
import Link from "next/link";
import Pagination from "../_components/Pagination/Pagination";

export const metadata: Metadata = {
  title: "Offers of AnyTown Real Estate",
  description: "Generated by create next app",
};

async function Offers({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const limit = searchParams["limit"] ?? "5";
  const start = (Number(page) - 1) * Number(limit);
  const end = start + Number(limit);

  //get offers data
  let { data: Offers, error } = await supabase
    .from("Offers")
    .select("*")
    .range(start, end - 1);
  //get quantity of offers
  let { data: data, count } = await supabase
    .from("Offers")
    .select("*", { count: "exact" });

  let totalItems = typeof count === "number" ? count : 1;
  let numberOfPages = Math.ceil(totalItems / Number(limit));

  console.log("totalItems", totalItems, "totalPages:", numberOfPages);

  const List = () => {
    return Offers?.map((item) => (
      <Link href={`/offers/${item.offerID.toString()}`}>
        <ListingItem key={item.offerID} data={item} />
      </Link>
    ));
  };
  return (
    <section className={styles.section_container}>
      <List />
      <Pagination numberOfPages={numberOfPages} />
    </section>
  );
}

export default Offers;