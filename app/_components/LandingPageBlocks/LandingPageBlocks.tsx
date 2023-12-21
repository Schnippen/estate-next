import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import PrimaryPhoto from "../../../public/images/LandingPagePrimary.webp";
import SecondaryPhoto from "../../../public/images/LandingPageSecondary.webp";
import { LuMousePointerClick } from "react-icons/lu";
import Link from "next/link";

function LandingPageBlocks() {
  const DescriptionPrimary = () => {
    return (
      <div className={styles.descriptionMarket}>
        <h1 className={styles.descriptionMarket_title}>
          {" "}
          Find Your Ideal Home in the Primary Real Estate Market
        </h1>
        <LuMousePointerClick className={styles.poiner} />
      </div>
    );
  };
  const DescriptionSecondary = () => {
    return (
      <div className={styles.descriptionMarket}>
        <h1 className={styles.descriptionMarket_title}>
          {" "}
          Crafting Homes with a History - Secondary Market
        </h1>
        <LuMousePointerClick className={styles.poiner} />
      </div>
    );
  };
  return (
    <div className={styles.marker_wrapper}>
      <article className={styles.primaryMarket_container}>
        <Link href={"/offers?market=pierwotny"} style={{ width: "100%" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <div className={styles.radialContainer2}></div>
            <DescriptionPrimary />
            <Image
              src={PrimaryPhoto}
              alt="Picture of the author"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "15px 15px 15px 15px ",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </Link>
      </article>
      <article className={styles.secondaryMarket_container}>
        <Link href={"/offers?market=wtórny"} style={{ width: "100%" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <div className={styles.radialContainer3}></div>
            <DescriptionSecondary />
            <Image
              src={SecondaryPhoto}
              alt="Picture of the author"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
                transition: " 0.3s",
                borderRadius: "15px 15px 15px 15px ",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </Link>
      </article>
    </div>
  );
}

export default LandingPageBlocks;
