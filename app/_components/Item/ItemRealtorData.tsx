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
  const TelephoneNumberSpaces = TelephoneNumber.replace(/(.{3})/g, "$1 ");
  return (
    <header className={styles.section_header}>
      <h2>Skontakuj się</h2>
      <div className={styles.contact}>
        <Image
          className={styles.profilePicture}
          src={DefaultProfilePicture}
          alt="Profile of realtor"
        />
        <address className={styles.address}>
          <div>
            <strong>{SellerInfo}</strong>
          </div>
          <AgencyInfoComponent />
          <div className="phoneNr">
            tel.
            <span className="phone"> {TelephoneNumberSpaces}</span>
          </div>
        </address>
      </div>
    </header>
  );
}

export default RealtorData;
