import Image from "next/image";
import styles from "./page.module.css";
import SearchForm from "./_components/SearchForm/SearchForm";
import LandingPageBackground from "../public/images/LandingPageBackground.webp";
import CardPanel from "./_components/Card/CardPanel";

export default function Home() {
  const LandingPageDescription = () => {
    return (
      <div className={styles.DescriptionWrapper}>
        <div className={styles.DescriptionContainer}>
          <h1 className={styles.DescriptionContainer_title}>
            Find your most Suitable Property
          </h1>
          <p className={styles.DescriptionContainer_paragraph}>
            Explore a diverse portfolio of properties, from cozy apartments to
            sprawling estates, and find the perfect place to call home.
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <div className={styles.radialContainer}></div>
          <LandingPageDescription />
          <Image
            src={LandingPageBackground}
            alt="Background Image: Violet house"
            placeholder="blur"
            quality={30}
          />
          <SearchForm />
        </div>
        <div className={styles.page_gap}></div>
        <CardPanel />
      </section>
    </main>
  );
}
//;
