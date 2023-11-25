import React from "react";
import styles from "../../_styles/ItemDescription.module.css";
import ItemDescriptionTable from "./ItemDescriptionTable";
import GoogleMaps from "../Map/GoogleMaps";
function ItemDescription({ Offers }: { Offers: any[] | null }) {
  const data = Offers ? Offers[0] : {};
  const DescriptionInfo = Offers ? Offers[0].descriptionInfo : null;
  const PublishedDate = Offers ? Offers[0].publishedInfo : null;
  const Description = () => (
    <div className={styles.description_wrapper}>
      <h3>Opis nieruchomości</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{DescriptionInfo}</p>
      <div className={styles.description_published}>
        <p>Ogłoszenie zostało dodane {PublishedDate}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.description_container}>
      <ItemDescriptionTable Offers={data} />
      <Description />
      <GoogleMaps Offers={data} />
    </div>
  );
}

export default ItemDescription;
