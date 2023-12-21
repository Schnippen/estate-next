"use client";
import React, { Suspense, useState } from "react";
import styles from "../../_styles/Item.module.css";
import ItemMultimediaCategories from "./ItemMultimediaCategories";
import ItemPhotos from "./ItemPhotos";
import GoogleMaps from "../Map/GoogleMaps";
function ItemMultimediaContainer({
  offerID,
  OfferData,
}: {
  offerID: number | null;
  OfferData: any[] | null;
}) {
  /*   const [isActive, setIsActive] = useState<boolean>(true);
   */
  /*   function handleState(isActive: boolean) {
    setIsActive(isActive);
  } */
  return (
    <section>
      <div className={styles.container_article_multimedia_categories}>
        <ItemMultimediaCategories
          /* isActive={isActive} */
          /*  setIsActive={handleState} */
          offerID={offerID}
        />
      </div>
      <div className={styles.multimedia_container}>
        <ItemPhotos />
        {/*       {isActive ? (
          <ItemPhotos />
        ) : (
          <Suspense fallback={<h1>Loading</h1>}>
            <GoogleMaps Offers={OfferData} />
          </Suspense>
        )}
        {isActive ? (
                  <ItemPhotos isMobile={isMobile} />
                ) : (
                  <GoogleMaps prop={prop} />
                )}  */}
      </div>
    </section>
  );
}

export default ItemMultimediaContainer;
