"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import styles from "./Navbar.module.css";

function NavbarLogo() {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <div className={styles.logo_container}>
          <MdOutlineRealEstateAgent />
          Anytown Real Estate
        </div>
      </div>
    </Link>
  );
}

export default NavbarLogo;
