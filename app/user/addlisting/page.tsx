import React from "react";
import styles from "../../_styles/UserLayout.module.css";
import CreateListingForm from "@/app/_components/CreateListing/CreateListingForm";
function page() {
  return (
    <section
      className={styles.mainSectionFormContainer}
      style={{ overflow: "auto" }}
    >
      <CreateListingForm />
    </section>
  );
}

export default page;
