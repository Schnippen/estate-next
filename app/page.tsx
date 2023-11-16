import Image from "next/image";
import styles from "./page.module.css";
import backgroundImg from "../public/images/backgroundPhoto2.jpg";
export default function Home() {
  /*<Image
   className={styles.logo}
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>; */
  return (
    <main className={styles.main}>
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <Image
            className={styles.logo}
            src={backgroundImg}
            alt="Background Image: Violet house"
            priority
          />
        </div>
      </section>
    </main>
  );
}
