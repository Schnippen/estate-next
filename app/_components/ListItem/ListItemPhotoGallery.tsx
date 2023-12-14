import React, { lazy } from "react";
import Image from "next/image";
import styles from "./ListingItem.module.css";
import image from "../../../public/images/estate1.webp";
function ListItemPhotoGallery() {
  return (
    <div className={styles.ImageWrapper}>
      <Image
        src={image}
        alt="Offer's Photo Galery minature"
        priority={false}
        placeholder="blur"
        loading="lazy"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
        style={{
          objectFit: "contain",
          borderRadius: "16px",
        }}
      />
    </div>
  );
}

export default ListItemPhotoGallery;
