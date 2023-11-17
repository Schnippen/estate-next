import type { Metadata } from "next";
import React from "react";
import { fetchData } from "../_utils/fetchData";
import { supabase } from "../_utils/superbaseClient";
import { Suspense } from "react";
import styles from "../_styles/Offers.module.css";
import ListingItem from "../_components/ListItem/ListingItem";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Offers of AnyTown Real Estate",
  description: "Generated by create next app",
};

async function Offers({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //zrobić typy dla ofert
  /*    const offersData = fetchData()
  const offersFetched = await offersData; */
  let { data: Offers, error } = await supabase
    .from("Offers")
    .select("*")
    .limit(2);

  /*  const items = Array.from({ length: 10 }, (_, index) => (
    <ListingItem key={index} />
  )); */

  console.log(Offers?.length);

  const Data = () => {
    return Offers?.map((item) => (
      <Link href={`/blog/${item.offerID}`}>
        <ListingItem key={item.offerID} />
      </Link>
    ));
  };
  return (
    <section className={styles.section_container}>
      Offers
      <Data />
    </section>
  );
}

export default Offers;
