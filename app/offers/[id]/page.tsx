import Loading from "@/app/_components/Loading/Loading";
import { supabase } from "@/app/_utils/superbaseClient";
import React, { Suspense } from "react";
/* export async function generateStaticParams() {
  /*   const { data: Offers, error } = await supabase
    .from("Offers")
    .select("offerID");
  return Offers; */

//console.log("Offers:", Offers);
function Item({ params: { offerID } }: { params: { offerID: number } }) {
  console.log(offerID);
  return <div>item</div>;
}

export default Item;
