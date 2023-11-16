import { supabase } from "./superbaseClient";

export async function fetchData() {
  try {
    let { data: Offers, error } = await supabase
      .from("Offers")
      .select("*")
      .limit(10); //change to .range for pagination
    if (Offers) {
      return Offers;
    } else if (error) {
      throw new Error(`Failed to fetch from supabase:${error}`);
    }
  } catch (error) {
    console.error(error);
  }
}
