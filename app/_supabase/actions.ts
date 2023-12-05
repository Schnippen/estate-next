"use server";

import createSupabaseServerClient from "./supabaseServer";

export async function signUpWithEmailAndPassword(
  email: string,
  password: string
  //confirm: string
) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {}

export default async function readUserSession() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}
