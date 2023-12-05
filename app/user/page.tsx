import Link from "next/link";
import React from "react";
import styles from "../_styles/UserLayout.module.css";
import { readUserSession } from "../_supabase/actions";
import ButtonSignOut from "../_components/Buttons/ButtonSignOut";
async function page() {
  const { data } = await readUserSession();
  const UserName = () => {
    const user = data.session?.user.email;
    return <h1>{user}</h1>;
  };
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeSection_container}>
        <h1 className={styles.welcomeSection_title}>Welcome</h1>
        {data.session ? <UserName /> : null}
        {data.session ? <ButtonSignOut /> : null}
      </div>
    </section>
  );
}

export default page;
