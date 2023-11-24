"use client";
import React from "react";
import styles from "../../_styles/Item.module.css";

function ItemMultimediaCategories({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}) {
  return (
    <ul>
      <li
        className={
          isActive
            ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
            : `${styles.multimedia_categories}`
        }
        onClick={() => setIsActive(!isActive)}
      >
        Zdjęcia<span></span>
      </li>
      {
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
      }
      <div>{/* { <span>{AddToFavorites}</span> } */}AddToFavorites</div>
    </ul>
  );
}

export default ItemMultimediaCategories;
