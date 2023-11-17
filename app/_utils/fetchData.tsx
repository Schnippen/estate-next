import { RealEstateOffer } from "@/types";
import { supabase } from "./superbaseClient";

export async function fetchData(): Promise<RealEstateOffer[]> {
  try {
    let { data: Offers, error } = await supabase
      .from("Offers")
      .select("*")
      .limit(2);
    if (Offers) {
      return Offers;
    } else if (error) {
      throw new Error(`Failed to fetch from supabase:${error}`);
    }
    return [];
  } catch (error) {
    console.error(error);
  }
  return [];
}
