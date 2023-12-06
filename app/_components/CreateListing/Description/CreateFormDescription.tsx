"use client";
import React from "react";
import styles from "../CreateFormContactDetails.module.css";
import { useThrottledFunc } from "../../../_utils/useThrottle";

type CreateFormDescriptionTypes = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textState: string;
  titleState: string;
};

function CreateFormDescription({
  handleChange,
  textState,
  titleState,
}: CreateFormDescriptionTypes) {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  };
  const labelStyle = {
    padding: "5px 0",
  };

  const handleOnChange = useThrottledFunc(
    (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e),
    2000
  );

  return (
    <article className={styles.article}>
      <h3 className={styles.title}>Title and Description</h3>

      <section className={styles.article_section}>
        <div style={divStyle as React.CSSProperties}>
          <label htmlFor="title" style={labelStyle}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="offerTitle"
            className={styles.descriptionTitle}
            onChange={(e) => {
              handleOnChange(e);
            }}
            maxLength={100}
          />
          <div className={styles.digitsStyle}>
            <p>{titleState.length}/100</p>
          </div>
          {titleState.length > 0 && titleState.length < 20 ? (
            <div className={styles.errorParagraph}>
              <p>Description should have at least 20 characters</p>
            </div>
          ) : null}
        </div>
        <div style={divStyle as React.CSSProperties}>
          <label htmlFor="description" style={labelStyle}>
            Opis
          </label>
          <textarea
            id="description"
            cols={30}
            rows={10}
            className={styles.descriptionText}
            name="descriptionInfo"
            onChange={(e) => {
              handleOnChange(e);
            }}
            maxLength={6000}
          ></textarea>
        </div>
        <div className={styles.digitsStyle}>
          <p>{textState.length}/6000</p>
        </div>
        {textState.length > 0 && textState.length < 50 ? (
          <div className={styles.errorParagraph}>
            <p>Description should have at least 50 characters</p>
          </div>
        ) : null}
      </section>
    </article>
  );
}

export default CreateFormDescription;
