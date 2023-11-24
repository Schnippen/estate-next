"use client";
import React, { useState } from "react";
import styles from "../../_styles/Item.module.css";
import ItemMultimediaCategories from "./ItemMultimediaCategories";
function ItemMultimediaContainer() {
  const [isActive, setIsActive] = useState<boolean>(true);

  function handleState(isActive: boolean) {
    setIsActive(isActive);
  }
  return (
    <section>
      <div className={styles.container_article_multimedia_categories}>
        <ItemMultimediaCategories
          isActive={isActive}
          setIsActive={handleState}
        />
      </div>
      <div className={styles.multimedia_container}>
        {isActive ? "pip" : "pup"}
        {/*  {isActive ? (
                  <ItemPhotos isMobile={isMobile} />
                ) : (
                  <GoogleMaps prop={prop} />
                )} */}
      </div>
    </section>
  );
}

export default ItemMultimediaContainer;
