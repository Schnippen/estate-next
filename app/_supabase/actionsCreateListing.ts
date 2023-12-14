"use server";

import createSupabaseServerClient from "./supabaseServer";

export async function createListing(object: any) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("Offers")
    .insert([object])
    .select();
  console.log(data, error);
}
