"use client";
import React from "react";
import styles from "./Loading.module.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from "react";

type LoadingTypes = {};

function Loading({}: LoadingTypes) {
  const [dots, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots === "...") {
        setTime("");
      } else {
        setTime((dots) => dots + ".");
      }
    }, 930);
    return () => {
      clearInterval(interval);
    };
  }, [dots]);
  const loadingText = "Loading";

  return (
      <div className={styles.loading_container}>
        <AiOutlineLoading
          className={styles.svg}
          /* style={{ color: `${svgColor}` }} */
        />
        <div className={styles.text_container}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {loadingText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  color: "black",
                  animationDelay: `calc(.1s * ${index + 1})`,
                }}
              >
                {char}
              </span>
            ))}

            {dots}
          </div>
        </div>
      </div>
  );
}
//top: `${top}%`, left: `${left}%`
export default Loading;
