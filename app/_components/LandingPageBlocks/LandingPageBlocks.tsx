import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import PrimaryPhoto from "../../../public/images/LandingPagePrimary.webp";
import SecondaryPhoto from "../../../public/images/LandingPageSecondary.webp";

function LandingPageBlocks() {
  const DescriptionPrimary = () => {
    return <div></div>;
  };
  const DescriptionSecondary = () => {
    return <div></div>;
  };
  return (
    <div className={styles.marker_wrapper}>
      <article className={styles.primaryMarket_container}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className={styles.radialContainer2}></div>
          <Image
            src={PrimaryPhoto}
            alt="Picture of the author"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </article>
      <article className={styles.secondaryMarket_container}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className={styles.radialContainer3}></div>
          <Image
            src={SecondaryPhoto}
            alt="Picture of the author"
            sizes="100vw"
            fill
            style={{
              objectFit: "cover",
              transition: " 0.3s",
            }}
            className={styles.zoom}
          />
        </div>
      </article>
    </div>
  );
}

export default LandingPageBlocks;
/*   <Image
    src={SecondaryPhoto}
    alt="Background Image: Violet house"
    placeholder="blur"
    quality={30}
    width={500}
    height={500}
    sizes="100vw"
    style={{
      width: "100%",
      height: "auto",
    }}
  />; */
