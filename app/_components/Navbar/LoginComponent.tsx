"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { supabase } from "@/app/_supabase/supabaseClient";
import { readUserSession } from "@/app/_supabase/actions";

function LoginComponent() {
  const [data, setData] = useState(false);
  const text = data ? "Dashboard" : "Login";
  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const { data } = await readUserSession();
        //const userEmail = data.session?.user.email;
        //const { data } = await supabase.auth.getSession();
        console.log(data);
        data ? setData(true) : setData(false);
      } catch (error) {
        console.error("Error fetching user session:", error);
      }
    };
    fetchUserSession();
  }, []);
  return (
    <Link href={`/user/`}>
      <div className={styles.loginButton}>{text}</div>
    </Link>
  );
}

export default LoginComponent;
