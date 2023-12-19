import React from "react";
import UserSignUpForm from "@/app/_components/Forms/UserSignUpForm";
//import { redirect } from "next/navigation";

import styles from "../../_styles/UserLayout.module.css";
//import { readUserSession } from "@/app/_supabase/actions";
async function page() {
  /*   const { data } = await readUserSession();
  if (data.session) {
    return redirect("/user/");
  } */
  return (
    <section className={styles.mainSectionFormContainer}>
      <UserSignUpForm />
    </section>
  );
}

export default page;
