import React from "react";
import Card from "./Card";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
//import styles from ""
//className={styles.landing__page_card_section_list}
function CardPanel() {
  let Lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!";
  return (
    <ul>
      <Card
        title="Buy Real Estate"
        description={Lorem}
        buttonDescription="Check Properties"
        alt="Buy Real Estate"
        svg={<MdOutlineMapsHomeWork />}
      ></Card>

      <Card
        title="Sell Real Estate"
        description={Lorem}
        buttonDescription="Explore Your Options"
        alt="Sell Real Estate"
        svg={<BsCashCoin />}
      ></Card>
    </ul>
  );
}

export default CardPanel;
