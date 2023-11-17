import Loading from "@/app/_components/Loading/Loading";
import { supabase } from "@/app/_utils/superbaseClient";
import React, { Suspense } from "react";

export async function generateStaticParams() {
  const { data: Offers, error } = await supabase
    .from("Offers")
    .select("offerID");
  return Offers;
}

function Item({ params: { offerID } }: { params: { offerID: number } }) {
  return <div>ITEM PAGE</div>;
}

export default Item;
