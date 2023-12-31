import React from "react";
import styles from "./ListingItem.module.css";
import { RealEstateOffer } from "@/types";
import AddToFavoritesButton from "../Buttons/AddToFavoritesButton";
import ListItemPhotoGallery from "./ListItemPhotoGallery";
function ListingItem({ data }: { data: RealEstateOffer }) {
  const title = data.offerTitle
    ? data.offerTitle
        .split(" ")
        .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" ")
    : "Offer name";
  const categoryName = data.titleKategoria ? data.titleKategoria : null;
  const price =
    data.priceInfo !== undefined
      ? data.priceInfo === 0
        ? "Zapytaj o cenę"
        : `${data.priceInfo
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} zł`
      : null;
  const floorInfo =
    typeof data.floorInfo === "string" ? (
      <div>
        <p>{"Piętro:"}</p>
        <p>{data.floorInfo}</p>
      </div>
    ) : null;
  const numberOfRooms =
    typeof data.numberOfRoomsInfo === "string" ? (
      <p>
        {data.numberOfRoomsInfo}
        {parseInt(data.numberOfRoomsInfo, 10) === 1
          ? " Pokój"
          : parseInt(data.numberOfRoomsInfo, 10) > 1 &&
            parseInt(data.numberOfRoomsInfo, 10) < 5
          ? " Pokoje"
          : " Pokoi"}
      </p>
    ) : null;
  const area = data.areaInfo ? `${data.areaInfo} m²` : null;
  const areaPrice =
    typeof data.areaPriceInfo === "string" ? (
      <div>{data.areaPriceInfo}&nbsp;m²</div>
    ) : null;

  return (
    <li className={styles.listItem_container}>
      <article className={styles.grid_container}>
        <section
          className={styles.grid_img}
          /* onClick={(e) => handleNavigateItem(e)} */
        >
          <ListItemPhotoGallery />
        </section>
        <section className={styles.grid_mini}>
          <h3
            className={styles.grid_mini_category}
            /*   onClick={(e) => handleNavigateItem(e)} */
          >
            {categoryName}
          </h3>
          <h2
            className={styles.grid_mini_title}
            /* onClick={(e) => handleNavigateItem(e)} */
          >
            {title}
          </h2>
          <h3
            className={styles.grid_mini_price}
            /*  onClick={(e) => handleNavigateItem(e)} */
          >
            {price}
          </h3>
          <div className={styles.grid_mini_floor}>{floorInfo}</div>
          <div className={styles.grid_mini_numberOfRooms}>{numberOfRooms}</div>
          <div className={styles.grid_mini_area}>
            <div>
              {areaPrice} {area}
            </div>
          </div>
          <p className={styles.grid_mini_favorite}>Add to Favorites</p>
          <div className={styles.grid_mini_favoriteButton}>
            <AddToFavoritesButton offerID={data.offerID} />
          </div>
          <p className={styles.grid_mini_sendMessage}>{/* Napisz wiadomość */}</p>
          <div className={styles.grid_mini_sendMessageButton}>
            {/*       <Button>
              <HiMail />
            </Button> */}
          </div>
        </section>
      </article>
    </li>
  );
}

export default ListingItem;
