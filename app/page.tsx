import Image from "next/image";
import styles from "./page.module.css";
import backgroundImg from "../public/images/backgroundPhoto2.jpg";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <div className={styles.radialContainer}></div>
          <Image
            src={backgroundImg}
            alt="Background Image: Violet house"
            priority
          />
        </div>
      </section>
    </main>
  );
}
