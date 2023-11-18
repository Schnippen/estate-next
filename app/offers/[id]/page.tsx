import Loading from "@/app/_components/Loading/Loading";
import { supabase } from "@/app/_utils/superbaseClient";
import React, { Suspense } from "react";
/* export async function generateStaticParams() {
  /*   const { data: Offers, error } = await supabase
    .from("Offers")
    .select("offerID");
  return Offers; */

//console.log("Offers:", Offers);
async function Item({ params: { id } }: { params: { id: number } }) {
  const itemID = id.toString();
   let { data: Offers, error } = await supabase
    .from("Offers")
    .select()
    .eq("offerID", itemID);
  console.log(id, Offers, typeof itemID); 
  return <div>item: {id}</div>;
}

export default Item;
