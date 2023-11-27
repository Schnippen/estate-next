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
  const city = searchParams["city"] ?? "";
  const estate = searchParams["estate"] ?? "";
  const market = searchParams["market"] ?? "";
  const from = searchParams["from"] ?? "";
  const to = searchParams["to"] ?? "";

  const params = {
    filterCity: city.length > 0 ? city : "*",
    filterEstate: estate.length > 0 ? estate : "*",
    filterMarket: market.length > 0 ? market : "*",
    filterFrom: from.length > 0 ? from : "*",
    filterTo: to.length > 0 ? to : "*",
  };
  /* console.log("searchPARAMS rest", page, limit, city, estate, market, from, to);
  console.log("searchPARAMS CITY", searchParams);
  console.log("filter PARAMS", params); */
  //get offers data

  let { data: Offers, error } = await supabase
    .from("Offers")
    .select("*")
    .range(start, end - 1);

  let { data: poopa } = await supabase
    .from("Offers")
    .select("*")
    .filter("marketInfo", "in", "")
    .range(1, 2);
  console.log("Offers:", poopa, poopa?.length);
  //eq city eq estate eq market eq .gte from,   .lte to

  //get quantity of offers
  let { data: data, count } = await supabase
    .from("Offers")
    .select("*", { count: "exact", head: true });

  let totalItems = typeof count === "number" ? count : 1;
  let numberOfPages = Math.ceil(totalItems / Number(limit));

  const List = () => {
    return Offers?.map((item) => (
      <Link href={`/offers/${item.offerID}`}>
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
