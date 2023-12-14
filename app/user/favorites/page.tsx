import React from "react";
import styles from "../../_styles/UserLayout.module.css";
import { redirect } from "next/navigation";
import { readUserSession } from "@/app/_supabase/actions";

async function page() {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/user/");
  }
  return (
    <section className={styles.mainSectionFormContainer}>FAVORITES</section>
  );
}

export default page;
