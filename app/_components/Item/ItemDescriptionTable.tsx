"use client";
import React, { useState } from "react";
import styles from "../../_styles/ItemDescription.module.css";
useState;

function Table({ Offers }: { Offers: any }) {
  const ItemToIterate = Offers;
  const filtered: [string, any][] = Object.entries(ItemToIterate).filter(
    ([key, value]) => value !== null
  );
  const toRender = filtered.map(([key, value], index) => {
    switch (key) {
      case "areaInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Powierzchnia</th>
            <td>
              {value} m<sup>2</sup>
            </td>
          </tr>
        );
      case "numberOfRoomsInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Liczba pokoi</th>
            <td>{value}</td>
          </tr>
        );
      case "usableArea":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>
              Powierzchnia użytkowa
            </th>
            <td>
              {value} m<sup>2</sup>
            </td>
          </tr>
        );
      case "floorInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Piętro</th>
            <td>{value}</td>
          </tr>
        );
      case "numbersOfFloorsInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Liczba pięter</th>
            <td>{value}</td>
          </tr>
        );
      case "numberOfBathroomsInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Liczba Łazienek</th>
            <td>{value}</td>
          </tr>
        );
      case "typeOfKitchenInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Rodzaj kuchni</th>
            <td>{value}</td>
          </tr>
        );
      case "isBathroomSeparateInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Osobna łazienka</th>
            <td>{value}</td>
          </tr>
        );
      case "windowWoodworkInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Okna</th>
            <td>{value}</td>
          </tr>
        );
      case "marketInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Rynek</th>
            <td>{value}</td>
          </tr>
        );
      case "formOfPropertyInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Forma własności</th>
            <td>{value}</td>
          </tr>
        );
      case "typeOfBuildingInfoo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Rodzaj budynku</th>
            <td>{value}</td>
          </tr>
        );
      case "yearOfConstructionInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Rok budowy</th>
            <td>{value}</td>
          </tr>
        );
      case "conditionOfThePropertyInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Stan</th>
            <td>{value}</td>
          </tr>
        );
      case "heatingInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Ogrzewanie</th>
            <td>{value}</td>
          </tr>
        );
      case "balconyInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Balkon</th>
            <td>{value}</td>
          </tr>
        );
      case "balconyAreaInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>
              Powierzchnia balkonu
            </th>
            <td>
              {value} m<sup>2</sup>
            </td>
          </tr>
        );
      case "publishedInfo":
        return (
          <tr key={index}>
            <th className={styles.description_table_header}>Opublikowano</th>
            <td>{value}</td>
          </tr>
        );
      // Add more cases as needed...
      default:
        return null;
    }
  });

  return (
    <>
      <h2>Informacje szczegółowe</h2>
      <table className={styles.description_table}>
        <tbody>{toRender}</tbody>
      </table>
    </>
  );
}

export default Table;
