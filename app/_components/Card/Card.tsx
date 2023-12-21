import React from "react";
import styles from "./Card.module.css";
import Button from "../Buttons/Button";

type CardProps = {
  title: string;
  description: string;
  buttonDescription: string;
  alt: string;
  svg: any;
};

function Card(props: CardProps) {
  return (
    <li className={styles.card_section_item_li}>
      <div className={styles.card_section_item}>
        <div className={styles.card_svg}>{props.svg}</div>
        <h3 className={styles.card_title}>{props.title}</h3>
        <p>{props.description}</p>
        <button className={styles.card_section_button}>
          {props.buttonDescription}
        </button>
      </div>
    </li>
  );
}

export default Card;
