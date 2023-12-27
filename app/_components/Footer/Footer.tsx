"use client";
import React from "react";
import styles from "./Footer.module.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";
import Button from "../Buttons/Button";
type ListItemTypes = {
  icon: React.ElementType;
  text: string;
};

function Footer() {
  const ListItem = ({ icon: Icon, text }: ListItemTypes) => (
    /*         <Link to={text}>
          <Button>
            <Icon />
          </Button>
        </Link> */
    <div>
      <Button>
        <Icon />
      </Button>
    </div>
  );
  const List = () => (
    <ul className={styles.social_links}>
      <ListItem icon={FiFacebook} text="*" />
      <ListItem icon={FiTwitter} text="*" />
      <ListItem icon={FiFacebook} text="*" />
      <ListItem icon={FiInstagram} text="*" />
    </ul>
  );
  const options = [
    "Others",
    "Loans",
    "Blog",
    "Ask an Expert",
    "Mobile Version",
    "Terms and Conditions",
    "Privacy Policy",
    "Data Protection",
  ];

  const others = [
    "Services for Real Estate Agencies",
    "For Developers",
    "For Advertisers",
    "Buy a Hanging Banner",
    "Order a 3D Interior",
    "Add Listing Pricing",
  ];

  const OptionsList = ({ options }: { options: string[] }) => (
    <ul>
      {options.map((item) => (
        <li className={styles.options_li} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.container_social}>
          <article className={styles.social}>
            <h4 className={styles.title}>Stay in touch:</h4>
            <List></List>
          </article>
          <article className={styles.social}>
            <h4 className={styles.title}>Customer Support Center</h4>
            <div className={styles.social_contact}>
              <h3>
                <HiPhone style={{ verticalAlign: "middle" }} />
                (525) 829-3410
              </h3>
            </div>
          </article>
        </section>
        <section className={styles.container_options}>
          <h4 className={styles.title}>Others</h4>
          <article className={styles.article}>
            <OptionsList options={options} />
          </article>
        </section>
        <section className={styles.container_navigation}>
          <h4 className={styles.title}>Services</h4>
          <article className={styles.article}>
            <OptionsList options={others} />
          </article>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
