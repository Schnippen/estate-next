"use client";
import React from "react";
import styles from "../../_styles/Item.module.css";
import AddToFavoritesButton from "../Buttons/AddToFavoritesButton";

function ItemMultimediaCategories({
  /*  isActive,
  setIsActive, */
  offerID,
}: {
  /* isActive: boolean;
  setIsActive: (isActive: boolean) => void; */
  offerID: number | null;
}) {
  return (
    <ul>
      <li
        className={
          /* isActive
            ?  */ `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
          /*   : `${styles.multimedia_categories}` */
        }
        /*  onClick={() => setIsActive(!isActive)} */
      >
        Photos<span></span>
      </li>
      {/*       {
        <li
          className={
            !isActive
              ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
              : `${styles.multimedia_categories}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          Mapa<span></span>
        </li>
      } */}
      <div className={styles.favoritesContainer}>
        <p className={styles.favoritesContainer_paragraph}>AddToFavorites</p>{" "}
        <AddToFavoritesButton offerID={offerID} />
      </div>
    </ul>
  );
}

export default ItemMultimediaCategories;
