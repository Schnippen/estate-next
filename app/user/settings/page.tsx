import React from "react";
import styles from "../../_styles/UserLayout.module.css";
import { AiOutlineSetting } from "react-icons/ai";
function Settings() {
  return (
    <section className={styles.mainSectionFormContainer}>
      <div className={styles.settings_container}>
        <AiOutlineSetting className={styles.settings_container_svg} />
        Settings
      </div>
    </section>
  );
}

export default Settings;
