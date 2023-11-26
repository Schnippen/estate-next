import styles from "./ButtonSearch.module.css";
import React from "react";

type ButtonProps = {
  children: any;
  disabled?: boolean;
  id?: string;
  type?: "submit";
  onClick?: (e: React.FormEvent<HTMLFormElement>) => void;
};

function ButtonSearch(props: ButtonProps) {
  return (
    <button
      className={styles.small_button}
      disabled={props.disabled}
      id={props.id}
      type={props.type}
      onClick={() => props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ButtonSearch;
