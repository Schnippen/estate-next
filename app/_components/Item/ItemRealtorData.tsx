import React from "react";
import styles from "../../_styles/ItemRealtorData.module.css";
import DefaultProfilePicture from "@/public/images/profilePicture.png";

import Image from "next/image";

function RealtorData({ Offers }: { Offers: any }) {
  const SellerInfo = Offers.sellerInfo;
  const AgencyInfo = Offers.estateAgencyInfo;
  const AgencyInfoComponent = () => {
    return AgencyInfo.includes("tel.") ? null : <span>{AgencyInfo}</span>;
  };
  const TelephoneNumber = Offers.telephoneNumberInfo;
  return (
    <header className={styles.section_header}>
      <h2>Skontakuj się</h2>
      <div className={styles.contact}>
        <Image
          className={styles.profilePicture}
          src={DefaultProfilePicture}
          alt="Profile of realtor"
        />
        <address className={styles.adress}>
          <span>
            <strong>{SellerInfo}</strong>
          </span>
          <AgencyInfoComponent />
          <span className="phoneNr">
            tel.
            <span className="phone">{TelephoneNumber}</span>
          </span>
        </address>
      </div>
    </header>
  );
}

export default RealtorData;
