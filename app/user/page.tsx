import Link from "next/link";
import React from "react";
import styles from "../_styles/UserLayout.module.css";
import readUserSession from "../_supabase/actions";
async function page() {
  const { data } = await readUserSession();
  const UserName = () => {
    const user = data.session?.user.email;
    return <h1>{user}</h1>;
  };
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.welcomeSection_title}>Welcome</h1>
      {data.session ? <UserName /> : null}
    </section>
  );
}

export default page;
