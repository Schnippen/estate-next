import React from "react";
import styles from "./ListingItem.module.css";
import { RealEstateOffer } from "@/types";

function ListingItem({ data }: { data: RealEstateOffer }) {
  const title = data.offerTitle
    ? data.offerTitle
        .split(" ")
        .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" ")
    : "Offer name";
  const categoryName = data.titleKategoria ? data.titleKategoria : null;
  const price = data.priceInfo ? data.priceInfo : null;
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
  const area = data.areaInfo ? data.areaInfo : null;
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
          {/* <img
            src={`https://picsum.photos/id/${
              photosPicsum[Math.floor(Math.random() * photosPicsum.length)]
            }/500/500`}
            alt="listing"
            loading="lazy"
          ></img> */}
        </section>
        <section className={styles.grid_mini}>
          <h2
            className={styles.grid_mini_title}
            /* onClick={(e) => handleNavigateItem(e)} */
          >
            {title}
          </h2>
          <h3
            className={styles.grid_mini_category}
            /*   onClick={(e) => handleNavigateItem(e)} */
          >
            {categoryName}
          </h3>
          <h3
            className={styles.grid_mini_price}
            /*  onClick={(e) => handleNavigateItem(e)} */
          >
            {price}
          </h3>
          <div className={styles.grid_mini_floor}>{floorInfo}</div>
          <div className={styles.grid_mini_numberOfRooms}>{numberOfRooms}</div>
          <div className={styles.grid_mini_area}>
            <div>{area}</div>
            {areaPrice}
          </div>
          <p className={styles.grid_mini_sendMessage}>Napisz wiadomość</p>
          <div className={styles.grid_mini_sendMessageButton}>
            {/*       <Button>
              <HiMail />
            </Button> */}
          </div>
          <p className={styles.grid_mini_favorite}>Dodaj do ulubionych</p>
          <div className={styles.grid_mini_favoriteButton}>
            {/*   {AddToFavorites} */}
          </div>
        </section>
      </article>
    </li>
  );
}

export default ListingItem;
