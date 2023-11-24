import Loading from "@/app/_components/Loading/Loading";
import { supabase } from "@/app/_utils/superbaseClient";
import React, { Suspense } from "react";
import styles from "../../_styles/Item.module.css";
import ItemMultimediaContainer from "@/app/_components/Item/ItemMultimediaContainer";
import ItemDescription from "@/app/_components/Item/ItemDescription";


async function Item({ params: { id } }: { params: { id: number } }) {
  const itemID = id.toString();
  let { data: Offers, error } = await supabase
    .from("Offers")
    .select()
    .eq("offerID", itemID);

  //console.log(id, Offers, typeof itemID, typeof Offers);

  const Title = Offers
    ? Offers[0].offerTitle
        .split(" ")
        .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" ")
    : null;
    
  const CategoryTitle = Offers ? Offers[0].titleKategoria : null;
  const PriceInfo: string | null = Offers ? Offers[0].priceInfo : null;
  const PriceInfoComponent = () => {
    return (
      <>
        {PriceInfo === "Zapytaj o cenę" ? (
          <li className={styles.ask_for_price}>
            <p>{PriceInfo}</p>
          </li>
        ) : (
          <li>
            Cena<em>{PriceInfo}</em>
          </li>
        )}
      </>
    );
  };
  const AreaPrice = Offers ? Offers[0].areaPriceInfo : null;
  const AreaInfo = Offers ? Offers[0].AreaInfo : null;
  const NumberOfRooms = Offers ? Offers[0].numberOfRoomsInfo : null;
  const AreaInfoComponent = () => {
    return (
      <>
        {typeof NumberOfRooms === "string" ? (
          <li>
            Powierzchnia<em>{AreaInfo}</em>
          </li>
        ) : null}
      </>
    );
  };
  const NumberOfRoomsComponent = () => {
    return (
      <>
        {typeof NumberOfRooms === "string" ? (
          <li>
            {Number(NumberOfRooms) === 1
              ? " Pokój"
              : Number(NumberOfRooms) > 1 && Number(NumberOfRooms) < 5
              ? " Pokoje"
              : " Pokoi"}
            <em>{NumberOfRooms}</em>
          </li>
        ) : null}
      </>
    );
  };
  return (
    <>
      {`item:${id}`}
      {/* <BreadCrumbs prop={prop} /> */}
      <div className={styles.container}>
        <article className={styles.container_article_main}>
          <section className={styles.section_item}>
            <div className={styles.section_item_div}>
              <header>
                <div>
                  <h1>{Title}</h1>
                  <h3>{CategoryTitle}</h3>
                </div>
                <div className={styles.container_article_main_categories}>
                  <ul className={styles.container_article_main_categories_list}>
                    <PriceInfoComponent />
                    <li>
                      Cena za m²<em>{AreaPrice}</em>
                    </li>
                    <AreaInfoComponent />
                    <NumberOfRoomsComponent />
                  </ul>
                </div>
              </header>
              <ItemMultimediaContainer />
            </div>
          </section>
          <section className={styles.section_information}>
            <ItemDescription Offers={Offers} />
          </section>
        </article>
        {/*  <ItemSideArticle prop={prop} AskForPrice={AskForPrice} /> */}
      </div>
    </>
  );
}

export default Item;
