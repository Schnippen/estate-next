"use client";
import React from "react";
import { MdBrightnessLow, MdBrightness3 } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState } from "react";
import styles from "./ThemeButton.module.css";

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={styles.smallButton}
      onClick={() => {
        setIsActive(!isActive);
        isActive ? setTheme("light") : setTheme("dark");
      }}
    >
      <div
        className={styles.smallButton_rail}
        style={{
          backgroundColor: isActive
            ? "var(--disabled)"
            : "var(--primary-text-color)",
        }}
      >
        <span
          className={`${styles.smallButton_rail_span} ${
            isActive
              ? styles.smallButton_rail_span_active
              : styles.smallButton_rail_span_inactive
          }`}
        ></span>
        <div className={styles.smallButton_rail_svg}>
          <MdBrightnessLow style={{ color: "var(--tertiary-text-color)" }} />
        </div>
        <div className={styles.smallButton_rail_svg}>
          <MdBrightness3 style={{ color: "var(--tertiary-color)" }} />
        </div>
      </div>
    </button>
  );
}

export default ThemeButton;

/*   <div
    className={styles.smallButton_rail}
    style={{
      backgroundColor: isActive
        ? "var(--disabled)"
        : "var(--primary-text-color)",
    }}
  >
    <span
      className={`${styles.smallButton_rail_span} ${
        isActive
          ? styles.smallButton_rail_span_active
          : styles.smallButton_rail_span_inactive
      }`}
    ></span>
    <div className={styles.smallButton_rail_svg}>
      <MdBrightnessLow style={{ color: "var(--tertiary-text-color)" }} />
    </div>
    <div className={styles.smallButton_rail_svg}>
      <MdBrightness3 style={{ color: "var(--tertiary-color)" }} />
    </div>
  </div>; */
