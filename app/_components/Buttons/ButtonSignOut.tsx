"use client";
import React from "react";
import { logOut } from "@/app/_supabase/actions";
import { useRouter } from "next/navigation";

import styles from "./ButtonSignOut.module.css";
function ButtonSignOut() {
  const router = useRouter();
  const handleLogOut = async () => {
    await logOut();
    console.log("logout clicked");
    //router.push("/");
  };

  return (
    <button className={styles.small_button} onClick={() => handleLogOut()}>
      Logout
    </button>
  );
}

export default ButtonSignOut;
