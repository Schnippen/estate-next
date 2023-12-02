// @ts-nocheck
"use client";
import React from "react";
import styles from "../../_styles/ItemDescription.module.css";

function GoogleMaps({ Offers }: { Offers: any[] | null }) {
  const MapData = Offers
    ? { long: Offers["googleMapsInfo/0"], lat: Offers["googleMapsInfo/1"] }
    : null;

  if (!MapData || !MapData.long || !MapData.lat) {
    return null;
  }

  //console.log("MapData:", MapData.long, MapData.lat, typeof MapData.long);

  return (
    <div className={styles.description_container_maps}>
      <iframe
        title="Google map for a listing"
        className={styles.maps}
        src={`https://maps.google.com/maps?q=${parseFloat(
          MapData.long
        )},${parseFloat(MapData.lat)}&hl=es;&output=embed`}
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
