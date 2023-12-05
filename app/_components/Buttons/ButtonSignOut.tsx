"use client";
import React from "react";
import { logOut } from "@/app/_supabase/actions";
import { redirect } from "next/navigation";
import styles from "./ButtonSignOut.module.css";
function ButtonSignOut() {
  const handleLogOut = async () => {
    await logOut;
    redirect("/");
  };

  return <button className={styles.small_button}>Logout</button>;
}

export default ButtonSignOut;
