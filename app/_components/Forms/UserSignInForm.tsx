"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from './UserSignUpForm.module.css'
import { supabase } from "@/app/_utils/superbaseClient";
import useActive from "@/app/_utils/useActive";
import Link from "next/link";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiMail, HiLockClosed, HiOutlineEye, HiOutlineEyeOff, HiCheck, HiOutlineX } from "react-icons/hi";
import ButtonExit from "../Buttons/ButtonExit";

function UserSignInForm() {
   const [isLoading, setIsLoading] = useState(false);

   //email
   const [email, setEmail] = useState<string>("");
   const [emailValid, setEmailValid] = useActive(false);
   const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
   //password
   const [password, setPassword] = useState<string>("");
   const [passwordValid, setPasswordValid] = useActive(false);
   const [focusedPassword, setFocusedPassword] = useState(false);
   const [passwordShown, setPasswordShown] = useActive(false);
   const inputRefPassword = useRef<HTMLInputElement>(null);
   const PASSWORD_REGEX =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,16}$/;
   const [showPasswordError, setShowPasswordError] = useState(false);
   //password Confirmation - Matched
   const [passwordMatched, setPasswordMatched] = useState<string>("");
   const [passwordMatchedValid, setPasswordMatchedValid] = useActive(false);
   const [focusedPasswordMatched, setFocusedPasswordMatched] = useState(false);
   const inputRefPasswordMatched = useRef<HTMLInputElement>(null);

   const [showSuccessModal, setShowSuccessModal] = useState(false);
   const [showErrorModal, setShowErrorModal] = useState(false);

   useEffect(() => {
     if (showSuccessModal || showErrorModal) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }
   }, [showSuccessModal, showErrorModal]);

   useEffect(() => {
     setEmailValid(EMAIL_REGEX.test(email));
   }, [email]);

   useEffect(() => {
     setPasswordValid(PASSWORD_REGEX.test(password));
     setPasswordMatchedValid(passwordMatched === password);
     setShowPasswordError(focusedPassword && !passwordValid);
   }, [password, passwordMatched]);

   //go back after success or error

   useEffect(() => {
     if (showSuccessModal || showErrorModal) {
       setTimeout(() => {
         setShowSuccessModal(false);
         setShowErrorModal(false);
         setEmail("");
         setPassword("");
         setPasswordMatched("");
       }, 5000);
     }
   }, [showSuccessModal, showErrorModal]);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     alert("Signing Up!");
     console.log("Proceed registration");
     setIsLoading(true);

     try {
       const { data, error } = await supabase.auth.signUp({
         email: email,
         password: password,
         options: {
           emailRedirectTo: "https//example.com/welcome",
         },
       });
       setShowSuccessModal(true);
       console.log(data, error);
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
         <h2>Login throw new Error("");
          Anytown Real Estate</h2>
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
               use thirdt party:{" "}
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
               or register via
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
                 className={
                   !email
                     ? styles.inputText
                     : emailValid
                     ? styles.inputTextValid
                     : styles.inputTextError
                 }
                 onChange={(e) => setEmail(e.target.value.trim())}
                 onKeyDown={handleSpace}
               />
             </div>
             {!email || emailValid ? null : (
               <div className={styles.errorParagraph}>
                 <p>
                   This field must contain a valid email address (e.g
                   johndoe@test.com)
                 </p>
               </div>
             )}
             <label htmlFor="password">Password:</label>
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
                 placeholder="Hasło..."
                 className={
                   !password
                     ? styles.inputText
                     : passwordValid
                     ? styles.inputTextValid
                     : styles.inputTextError
                 }
                 onChange={(e) => setPassword(e.target.value)}
                 onFocus={() => setFocusedPassword((prev) => !prev)}
                 onBlur={() => setFocusedPassword((prev) => !prev)}
                 ref={inputRefPassword}
                 onKeyDown={handleSpace}
               />
             </div>
             {focusedPassword && !passwordValid ? (
               <div className={styles.errorParagraph}>
                 <p>
                   Password must be between 8 and 16 characters long.<br></br>
                   It must contain at least one number, one uppercase letter,
                   <br></br>
                   and one of the special characters: !@#$%
                 </p>
               </div>
             ) : null}
             <label htmlFor="passwordConfirmation">Repeat Password:</label>
             <div className={styles.form_div_wrapper}>
               <HiLockClosed className={styles.svg} />
               {passwordShown ? (
                 <HiOutlineEye
                   className={styles.svgPassword}
                   onClick={() => {
                     if (inputRefPasswordMatched.current) {
                       inputRefPasswordMatched.current.focus();
                       setPasswordShown(!passwordShown);
                     }
                   }}
                 />
               ) : (
                 <HiOutlineEyeOff
                   className={styles.svgPassword}
                   onClick={() => {
                     if (inputRefPasswordMatched.current) {
                       inputRefPasswordMatched.current.focus();
                       setPasswordShown(!passwordShown);
                     }
                   }}
                 />
               )}

               <input
                 id="passwordConfirmation"
                 type={passwordShown ? "text" : "password"}
                 name="passwordConfirmation"
                 required
                 placeholder="Repeat Password..."
                 className={
                   !passwordMatched
                     ? styles.inputText
                     : passwordMatchedValid
                     ? styles.inputTextValid
                     : styles.inputTextError
                 }
                 onChange={(e) => setPasswordMatched(e.target.value)}
                 onFocus={() => setFocusedPasswordMatched((prev) => !prev)}
                 onBlur={() => setFocusedPasswordMatched((prev) => !prev)}
                 ref={inputRefPasswordMatched}
                 onKeyDown={handleSpace}
               />
             </div>
             {focusedPasswordMatched && !passwordMatchedValid ? (
               <div className={styles.errorParagraph}>
                 <p>Repeat password</p>
               </div>
             ) : null}
             <div>
               <input
                 type="submit"
                 value={"Sign Up"}
                 className={styles.submit}
                 disabled={
                   !emailValid || !passwordValid || !passwordMatchedValid
                     ? true
                     : false
                 }
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
             <h1 className={styles.successTitle}>Check your e-mail</h1>
           </div>
         </div>
       ) : null}
       {showErrorModal ? (
         <div className={styles.modal}>
           <div className={styles.modalWrapper}>
             <HiOutlineX className={styles.errorModal} />
             <h1>Error</h1>
           </div>
         </div>
       ) : null}
     </div>
   );
}

export default UserSignInForm;
