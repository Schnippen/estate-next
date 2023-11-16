import type { Metadata } from "next";
import React from "react";
import { fetchData } from "../_utils/fetchData";
import { supabase } from "../_utils/superbaseClient";
import { Suspense } from "react";
import styles from "../_styles/Offers.module.css"
export const metadata: Metadata = {
  title: "Offers of AnyTown Real Estate",
  description: "Generated by create next app",
};

async function Offers() {
  //zrobić typy dla ofert
  /* const offersData = fetchData().then((result) => console.log(result));
  const offersFetched = await offersData; */
  /*   let { data: Offers, error } = await supabase
    .from("Offers")
    .select("*")
    .limit(10); */

  const OffersList = <div>OfferList</div>;


  console.log(Offers?.length);

  return (
    <section className={styles.section_container}>
      <Suspense fallback={<p>Loading feed...</p>}>OffersList</Suspense>
      Offers
    </section>
  );
}

export default Offers;
