"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavbarLogo from "./NavbarLogo";
import ThemeButton from "../Buttons/ThemeButton";
import { ThemeProvider } from "next-themes";
import LoginComponent from "./LoginComponent";
function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  /*   const Hamburger = () => {
    return (
      <div
        onClick={() => setIsOpened(!isOpened)}
        className={styles.showSidebar}
      >
        <div
          className={styles.hamburgerSlice}
          style={{ transform: isOpened ? "rotate(45deg)" : "rotate(0)" }}
        ></div>
        <div
          className={styles.hamburgerSlice}
          style={{
            opacity: isOpened ? "0" : "1",
            transform: isOpened ? "translateX(20px)" : "translateX(0)",
          }}
        ></div>
        <div
          className={styles.hamburgerSlice}
          style={{ transform: isOpened ? "rotate(-45deg)" : "rotate(0)" }}
        ></div>
      </div>
    );
  }; */

  return (
    <ThemeProvider themes={["light", "dark"]}>
      <header>
        <nav className={styles.nav}>
          {/* <Hamburger /> */}
          <div className={styles.ThemeButtonNavbarStyles}>
            <ThemeButton />
          </div>
          <NavbarLogo />
          <div className={styles.loginPosition}>
            <LoginComponent />
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}

export default Navbar;
