import type { Metadata } from "next";
import React from "react";
import { supabase } from "../_supabase/supabaseClient";
import styles from "../_styles/Offers.module.css";
import ListingItem from "../_components/ListItem/ListingItem";
import Link from "next/link";
import Pagination from "../_components/Pagination/Pagination";
import ListFilters from "../_components/ListFilters/ListFilters";

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
  const ascend = searchParams["order"] ?? "";
  const params = {
    filterCity: city.length > 0 ? city : false,
    filterEstate: estate.length > 0 ? estate : false,
    filterMarket: market.length > 0 ? market : false,
    filterFrom: from.length > 0 ? from : false,
    filterTo: to.length > 0 ? to : false,
   /*  filterAscend: ascend === "ascend" ? true : false, */
  };
  console.log("ASCEND", ascend);
  let query = supabase
    .from("Offer")
    .select("*", { count: "exact" })
    .range(start, end - 1);
  /*  console.log(
    "PARAMS:",
    params.filterCity,
    params.filterEstate,
    params.filterMarket,
    params.filterFrom,
    params.filterTo
    /* typeof params.filterCity,
    typeof params.filterEstate */

  //console.log("bool params:", !!params);

  if (params.filterCity) {
    query = query.eq("cityInfo", `${params.filterCity}`);
    console.log("City filter działam:", params.filterCity);
  }
  if (params.filterEstate) {
    query = query.eq("titleKategoria", `${params.filterEstate}`);
    console.log("filter estate działam:", params.filterEstate);
  }
  if (params.filterMarket) {
    query = query.eq("marketInfo", params.filterMarket);
  }
  if (params.filterFrom) {
    query = query.gte("priceInfo", params.filterFrom);
  }
  if (params.filterTo) {
    query = query.lte("priceInfo", params.filterTo);
  }
/*   if (params.filterAscend) {
    query = query.order("priceInfo", { ascending: params.filterAscend });
  } */

  const { data: Offers, error, count } = await query;
  //console.log("query:", query);
  console.log("query Error:", error);
  //console.log("Offers:", query, Offers?.length);
  //eq city eq estate eq market eq .gte from,   .lte to

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
      {/* <ListFilters /> */}
      <List />
      <Pagination numberOfPages={numberOfPages} />
    </section>
  );
}

export default Offers;
