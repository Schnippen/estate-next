"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./UserSignUpForm.module.css";
import useActive from "@/app/_utils/useActive";
import Link from "next/link";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  HiMail,
  HiLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiCheck,
  HiOutlineX,
} from "react-icons/hi";
import ButtonExit from "../Buttons/ButtonExit";
import { signInWithEmailAndPassword } from "@/app/_supabase/actions";

function UserSignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  //email
  const [email, setEmail] = useState<string>("");
  //password
  const [password, setPassword] = useState<string>("");

  const [focusedPassword, setFocusedPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useActive(false);
  const inputRefPassword = useRef<HTMLInputElement>(null);

  //password Confirmation - Matched

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSuccessModal, showErrorModal]);

  //show success or error
  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowErrorModal(false);
        setEmail("");
        setPassword("");
      }, 5000);
    }
  }, [showSuccessModal, showErrorModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Signing In!");
    console.log("Proceed registration");
    setIsLoading(true);

    try {
      const result = await signInWithEmailAndPassword(email, password);
      //console.log(result);
      const { data, error } = JSON.parse(result);
      console.log(data, error.message);
      if (error.message) {
        setErrorMessage(error.message);
        setShowErrorModal(true);
      } else {
        setShowSuccessModal(true);
      }
      /* console.log(data, error); */
      console.log("Success");
    } catch (error) {
      console.log(error);
      console.log("An error occurred. Please try again.");
      setShowErrorModal(true);
    }
  };

  const handleSpace = (e: React.KeyboardEvent) => {
    e.key === " " && e.preventDefault();
  };

  return (
    <div className={styles.signUp_body}>
      <div className={styles.header}>
        <h2>Login to Anytown Real Estate</h2>
      </div>
      <Link href={"/user"}>
        <span className={styles.backButton}>
          <ButtonExit />
          {/*        <HiArrowLeft />
          </ButtonExit> */}
        </span>
      </Link>
      <div className={styles.signUp_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.authentication}>
            <h5 style={{ borderBottom: "1px solid rgba(216, 216, 216, 0.4)" }}>
              Use third party Login:{" "}
            </h5>
            <div className={styles.authentication_button_wrapper}>
              <button className={styles.authentication_button}>
                <FcGoogle />
                Google
              </button>
              <button className={styles.authentication_button}>
                <BsFacebook />
                Facebook
              </button>
              <button className={styles.authentication_button}>
                <BsApple />
                Apple
              </button>
            </div>
            <h5
              style={{
                margin: "0 0 10px 0",
                borderBottom: "1px solid rgba(216, 216, 216, 0.4)",
              }}
            >
              or Login via
            </h5>
          </div>
          <div className={styles.authentication_panel}>
            <label
              htmlFor="email"
              className={styles.authentication_panel_label}
            >
              E-mail:
            </label>
            <div className={styles.form_div_wrapper}>
              <HiMail className={styles.svg} />
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Wpisz e-mail"
                required
                className={styles.inputText}
                onChange={(e) => setEmail(e.target.value.trim())}
                onKeyDown={handleSpace}
              />
            </div>

            <label htmlFor="password" className={styles.labelPassword}>
              Password:
            </label>
            <div className={styles.form_div_wrapper}>
              <HiLockClosed className={styles.svg} />
              {passwordShown ? (
                <HiOutlineEye
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPassword.current) {
                      inputRefPassword.current.focus();
                      setPasswordShown(!passwordShown);
                    }
                  }}
                />
              ) : (
                <HiOutlineEyeOff
                  className={styles.svgPassword}
                  onClick={() => {
                    if (inputRefPassword.current) {
                      inputRefPassword.current.focus();
                      setPasswordShown(!passwordShown);
                    }
                  }}
                />
              )}

              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                name="password"
                required
                placeholder="Password..."
                className={styles.inputText}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedPassword((prev) => !prev)}
                onBlur={() => setFocusedPassword((prev) => !prev)}
                ref={inputRefPassword}
                onKeyDown={handleSpace}
              />
            </div>
            <div>
              <input
                type="submit"
                value={"Sign In"}
                className={styles.submit}
                disabled={!email && !password}
              />
            </div>
          </div>
        </form>
      </div>
      {showSuccessModal ? (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <HiCheck className={styles.successModal} />
            <h2 className={styles.successTitle}>Success</h2>
            {/* <h1 className={styles.successTitle}>Check your e-mail</h1> */}
          </div>
        </div>
      ) : null}
      {showErrorModal ? (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <HiOutlineX className={styles.errorModal} />
            <h1 className={styles.errorModal_text}>Error</h1>
            <h1 className={styles.errorModal_text}>{errorMessage}</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserSignInForm;
