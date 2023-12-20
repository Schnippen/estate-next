import React from "react";
import styles from "../_styles/UserLayout.module.css";
import Link from "next/link";
import { Inter, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
function layout({ children }: { children: React.ReactNode }) {
  const SidePanelData = [
    { path: "/user/loginuser", name: "Login User" },
    { path: "/user/createuser", name: "Create New User" },
    { path: "/user/addlisting", name: "Add Listing" },
    { path: "/user/favorites", name: "Favorites" },
    { path: "/user/settings", name: "Settings" },
  ];
  const SidePanelList = () => {
    return SidePanelData.map((ListItem) => (
      <Link href={ListItem.path} className={styles.listItem}>
        <li>{ListItem.name}</li>
      </Link>
    ));
  };
  const SidePanel = () => {
    return (
      <aside className={`${styles.sidePanel} ${montserrat.className}`}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <SidePanelList />
          </ul>
        </nav>
      </aside>
    );
  };

  return (
    <div className={styles.userLayoutBody}>
      <section className={styles.userLayoutSection}>
        <SidePanel />
        <main className={styles.mainPanel}>{children}</main>
      </section>
    </div>
  );
}

export default layout;
