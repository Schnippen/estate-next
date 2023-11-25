"use client";
import React from "react";
import { useRef, useEffect } from "react";
import ButtonExit from "../Buttons/ButtonExit";
import styles from "../../_styles/ItemSideArticleCredit.module.css";

type TermsOfServiceTypes = {
  setIsActive: (value: boolean) => void;
  isActive: boolean;
};

function TermsOfService({ setIsActive, isActive }: TermsOfServiceTypes) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (isActive && ref.current === e.target) {
        setIsActive(!isActive);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActive]);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000045",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonExit setIsActive={() => setIsActive(!isActive)} />
      <div
        style={{
          backgroundColor: "#554971",
          height: "580px",
          width: "50%",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "1rem" }}>Terms Of Service</h1>
        <div
          style={{
            margin: "0 2rem",
            width: "auto",
            height: "440px",
            backgroundColor: "#fff",
            color: "#000",
            overflowY: "auto",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "100px 0",
          }}
        >
          <p style={{ margin: "20px 40px" }}>
            Welcome to AnyTownReal Estate, your trusted platform for real estate
            listings. By using our services, you agree to comply with the
            following terms and conditions:
          </p>
          <ol style={{ margin: "20px 40px" }}>
            <li style={{ margin: "20px 40px" }}>
              <strong>Acceptance of Terms:</strong>
              <ul>
                <li style={{ margin: "10px 40px" }}>
                  By accessing or using AnyTownReal Estate, you agree to these
                  Terms of Service.
                </li>
                <li style={{ margin: "10px 40px" }}>
                  If you do not agree with any part of the terms, you may not
                  use our services.
                </li>
              </ul>
            </li>

            <li style={{ margin: "20px 40px" }}>
              <strong>Contact Information:</strong>
              <ul>
                <li style={{ margin: "10px 40px" }}>
                  For questions or concerns regarding these terms, please
                  contact us at{" "}
                  <a href="mailto:contact@anytownrealestate.com">
                    contact@anytownrealestate.com
                  </a>
                  .
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Thank you for choosing AnyTownReal Estate. Happy property hunting!
          </p>
        </div>
        <div style={{ width: "300px", margin: "1rem 0" }}>
          <button
            className={styles.submit}
            onClick={() => setIsActive(!isActive)}
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
