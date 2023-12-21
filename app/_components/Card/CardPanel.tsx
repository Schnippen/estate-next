import React from "react";
import Card from "./Card";
//import { BsCashCoin } from "react-icons/bs";
//import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdApartment } from "react-icons/md";
import { MdLandscape } from "react-icons/md";

//import styles from ""
//className={styles.landing__page_card_section_list}
import styles from "./Card.module.css";
import Link from "next/link";
function CardPanel() {
  return (
    <ul className={styles.card_section_container}>
      <Link href={"/offers?estate=Dom%20na%20sprzedaż"}>
        <Card
          title="Buy a home"
          description={
            "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
          }
          buttonDescription="Browse homes"
          alt="Buy a home"
          svg={<IoHomeOutline />}
        ></Card>
      </Link>
      <Link href={"/offers?estate=Mieszkanie%20na%20sprzedaż"}>
        <Card
          title="Rent an Apartment"
          description={
            "Discover spacious apartments with great amenities and convenient locations. Your dream apartment is just a click away."
          }
          buttonDescription="Explore Apartments"
          alt="Rent an Apartment"
          svg={<MdApartment />}
        />
      </Link>
      <Link href={"/offers?estate=Działka%20na%20sprzedaż"}>
        <Card
          title="Buy Land"
          description={
            "Explore vast landscapes and find the perfect plot for your dream home or investment. Your piece of paradise awaits."
          }
          buttonDescription="Explore Land"
          alt="Buy Land"
          svg={<MdLandscape />}
        />
      </Link>
    </ul>
  );
}

export default CardPanel;

/*     <Card
      title="Sell Real Estate"
      description={Lorem}
      buttonDescription="Explore Your Options"
      alt="Sell Real Estate"
      svg={<BsCashCoin />}
    ></Card>; */
