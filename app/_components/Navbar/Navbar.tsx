"use client";
import React from "react";
import styles from "./Navbar.module.css";
import NavbarLogo from "./NavbarLogo";
import ThemeButton from "../Buttons/ThemeButton";
import { ThemeProvider } from "next-themes";
import LoginComponent from "./LoginComponent";
function Navbar() {
  return (
    <ThemeProvider themes={["light", "dark"]}>
      <header>
        <nav className={styles.nav}>
          <NavbarLogo />
          <LoginComponent />
          <ThemeButton />
        </nav>
      </header>
    </ThemeProvider>
  );
}

export default Navbar;
