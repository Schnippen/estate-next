import UserSignInForm from "@/app/_components/Forms/UserSignInForm";
import readUserSession from "@/app/_supabase/actions";
import { redirect } from "next/navigation";
import React from "react";
import styles from "../../_styles/UserLayout.module.css";
async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/user/");
  }
  return (
    <section className={styles.mainSectionFormContainer}>
      <UserSignInForm />
    </section>
  );
}

export default page;
