require("dotenv").config();
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (typeof supabaseUrl === "undefined") {
  throw new Error("Env var `supabaseUrl` is not defined");
}
if (typeof supabaseAnonKey === "undefined") {
  throw new Error("Env var `supabaseAnonKey` is not defined");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
