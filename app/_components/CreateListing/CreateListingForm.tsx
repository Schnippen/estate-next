"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./CreateListingForm.module.css";

import { PanelData } from "./CreateFormDataPanel";
import CreateFormPanel from "./CreateFormPanel";
import CreateFormLocation from "./Map/CreateFormLocation";
import CreateFormMedia from "./AddPhotos/CreateFormMedia";
import CreateFormDescription from "./Description/CreateFormDescription";
import CreateFormBasicInfromation from "./Basic/CreateFormBasicInfromation";
import { createListing } from "@/app/_supabase/actionsCreateListing";

function CreateListingForm() {
  interface InputValuesTypes {
    titleKategoria: string;
    offerTitle: string;
    priceInfo: number;
    areaInfo: number;
    areaPriceInfo: number;
    numberOfRoomsInfo: number;
    usableArea: number;
    floorInfo: number;
    descriptionInfo: string;
    buildingMaterialInfo: string;
    numbersOfFloorsInfo: string;
    numberOfBathroomsInfo: string;
    typeOfKitchenInfo: string;
    numbersOfBedroomsInfo: string;
    isBathroomSeparateInfo: string;
    windowWoodworkInfo: string;
    marketInfo: string;
    formOfPropertyInfo: string;
    typeOfBuildingInfo: string;
    plotTypeInfo: string;
    yearOfConstructionInfo: string;
    conditionOfThePropertyInfo: string;
    heatingInfo: string;
    //parkingInfo: string;
    balconyInfo: string;
    //elevatorInfo: string;
    balconyAreaInfo: string;
    gardenAreaInfo: string;
    landAreaInfo: string;
    plotLengthInfo: string;
    plotWidthInfo: string;
    numberOfOfferInfo: string;
    publishedInfo: string;
    //googleMapsInfo: [];
    telephoneNumberInfo: string;
    sellerInfo: string;
    estateAgencyInfo: string;
    sellerInfoEmail: string;
    offerID: number | string;
  }

  const [inputValues, setInputValues] = useState<InputValuesTypes>({
    titleKategoria: "",
    offerTitle: "",
    priceInfo: 0,
    areaInfo: 0,
    areaPriceInfo: 0,
    numberOfRoomsInfo: 0,
    usableArea: 0,
    floorInfo: 0,
    descriptionInfo: "",
    buildingMaterialInfo: "",
    numbersOfFloorsInfo: "",
    numberOfBathroomsInfo: "",
    typeOfKitchenInfo: "",
    numbersOfBedroomsInfo: "",
    isBathroomSeparateInfo: "",
    windowWoodworkInfo: "",
    marketInfo: "",
    formOfPropertyInfo: "",
    typeOfBuildingInfo: "",
    plotTypeInfo: "",
    yearOfConstructionInfo: "",
    conditionOfThePropertyInfo: "",
    heatingInfo: "",
    //parkingInfo: "",
    balconyInfo: "",
    //elevatorInfo: "",
    balconyAreaInfo: "",
    gardenAreaInfo: "",
    landAreaInfo: "",
    plotLengthInfo: "",
    plotWidthInfo: "",
    numberOfOfferInfo: "",
    publishedInfo: "",
    //googleMapsInfo: [],
    telephoneNumberInfo: "",
    sellerInfo: "",
    estateAgencyInfo: "",
    sellerInfoEmail: "",
    offerID: Date.now(),
  });

  const [category, setTitleCategory] = useState({
    string1: "",
    string2: "",
  });

  const handleCategory = (e: React.MouseEvent<HTMLInputElement>) => {
    setTitleCategory({
      ...category,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  useEffect(() => {
    if (category.string1 && category.string2) {
      setInputValues({
        ...inputValues,
        titleKategoria: category.string1 + " " + category.string2,
      });
    }
  }, [category.string1, category.string2]);

  //areaPriceInfo  zalatw to
  useEffect(() => {
    if (inputValues.priceInfo > 0 && inputValues.areaInfo > 0) {
      setInputValues({
        ...inputValues,
        areaPriceInfo: Math.floor(
          Number(inputValues.priceInfo) / Number(inputValues.areaInfo)
        ),
      });
    }
  }, [inputValues.priceInfo, inputValues.areaInfo]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>, limit: number) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  //const handleClick = () => {};

  //floorInfo
  const handleFloorInfo = (value: string) => {
    setInputValues({
      ...inputValues,
      numbersOfFloorsInfo: value,
    });
  };
  //handle dropdown inputs
  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setInputValues({
        ...inputValues,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");

    try {
      await createListing({
        titleKategoria: inputValues.titleKategoria,
        offerTitle: inputValues.offerTitle,
        priceInfo: inputValues.priceInfo,
        areaInfo: inputValues.areaInfo,
        areaPriceInfo: inputValues.areaPriceInfo,
        numberOfRoomsInfo: inputValues.numberOfRoomsInfo,
        usableArea: inputValues.usableArea,
        floorInfo: inputValues.floorInfo,
        descriptionInfo: inputValues.descriptionInfo,
        buildingMaterialInfo: inputValues.buildingMaterialInfo,
        numbersOfFloorsInfo: inputValues.numbersOfFloorsInfo,
        numberOfBathroomsInfo: inputValues.numberOfBathroomsInfo,
        typeOfKitchenInfo: inputValues.typeOfKitchenInfo,
        numbersOfBedroomsInfo: inputValues.numbersOfBedroomsInfo,
        isBathroomSeparateInfo: inputValues.isBathroomSeparateInfo,
        windowWoodworkInfo: inputValues.windowWoodworkInfo,
        marketInfo: inputValues.marketInfo,
        formOfPropertyInfo: inputValues.formOfPropertyInfo,
        typeOfBuildingInfo: inputValues.typeOfBuildingInfo,
        plotTypeInfo: inputValues.plotTypeInfo,
        yearOfConstructionInfo: inputValues.yearOfConstructionInfo,
        conditionOfThePropertyInfo: inputValues.conditionOfThePropertyInfo,
        heatingInfo: inputValues.heatingInfo,
        //parkingInfo: inputValues.parkingInfo,
        balconyInfo: inputValues.balconyInfo,
        //Info: inputValues.elevatorInfo,
        balconyAreaInfo: inputValues.balconyAreaInfo,
        gardenAreaInfo: inputValues.gardenAreaInfo,
        landAreaInfo: inputValues.landAreaInfo,
        plotLengthInfo: inputValues.plotLengthInfo,
        plotWidthInfo: inputValues.plotWidthInfo,
        numberOfOfferInfo: inputValues.numberOfOfferInfo,
        publishedInfo: inputValues.publishedInfo,
        //googleMapsInfo: inputValues.googleMapsInfo,
        telephoneNumberInfo: inputValues.telephoneNumberInfo,
        sellerInfo: inputValues.sellerInfo,
        estateAgencyInfo: inputValues.estateAgencyInfo,
        sellerInfoEmail: inputValues.sellerInfoEmail,
        offerID: inputValues.offerID,
      });
      console.log("input VALUES", inputValues);
    } catch (error) {
      console.log(error);
    }
  };

  function isValidTitleKategoria(titleKategoria: string) {
    return [
      "Mieszkanie na sprzedaż",
      "Dom na sprzedaż",
      "Nieruchomość Komercyjna na sprzedaż",
      "Działka na sprzedaż",
      "Garaż na sprzedaż",
    ].includes(titleKategoria);
  }

  const panelList = PanelData.map((data, index) => (
    <CreateFormPanel
      panel={data}
      key={index}
      handleCategory={handleCategory}
      panelSelected={category.string1}
    />
  ));

  console.table(inputValues);

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <section className={styles.section_transaction}>
        <div>
          <label htmlFor="Sprzedaż">
            <div
              className={styles.section_transaction_container}
              style={{
                color: category.string2 === "na sprzedaż" ? "#daa520" : "#fff",
              }}
            >
              <p>For Sale</p>
              <input
                type="radio"
                value="na sprzedaż"
                id="Sprzedaż"
                name="string2"
                onClick={handleCategory}
              />
              <span className={styles.custom_checkmark}></span>
            </div>
          </label>
          <label htmlFor="Wynajem">
            <div
              className={styles.section_transaction_container}
              style={{
                color: category.string2 === "na wynajem" ? "#daa520" : "#fff",
              }}
            >
              <p>For Rent</p>
              <input
                type="radio"
                value="na wynajem"
                id="Wynajem"
                name="string2"
                onClick={handleCategory}
              />
              <span className={styles.custom_checkmark}></span>
            </div>
          </label>
        </div>
      </section>
      <section className={styles.section_panel}>
        <ul className={styles.panel_container}>{panelList}</ul>
      </section>
      <section className={styles.section_details}>
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormBasicInfromation
            handleChange={handleChange}
            handleFloorInfo={handleFloorInfo}
            handleKeyDown={handleKeyDown}
            handleMax={handleMax}
            inputValues={inputValues.areaPriceInfo}
            type={inputValues.titleKategoria}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormLocation />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormMedia />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDescription
            handleChange={handleChange}
            titleState={inputValues.offerTitle}
            textState={inputValues.descriptionInfo}
          />
        )}
        {/*  {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDetailedInformation
            handleDropdown={handleDropdown}
            //inputValues={inputValues}
            type={inputValues.titleKategoria}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleMax={handleMax}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormContactDetails
            inputValues={inputValues}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleDropdown={handleDropdown}
            handleMax={handleMax}
          />
        )} */}
        <div className={styles.submit_wrapper}>
          <input
            type="submit"
            value="Publish"
            className={styles.submit}
          ></input>
        </div>
      </section>
    </form>
  );
}

export default CreateListingForm;
/*            disabled={
              inputValues.titleKategoria &&
              inputValues.priceInfo &&
              inputValues.areaInfo &&
              inputValues.offerTitle &&
              inputValues.sellerInfo &&
              inputValues.descriptionInfo.length > 100
                ? false
                : true
            }
            
            
                let UUID = Date.now();
    setInputValues({ ...inputValues, offerID: UUID });*/
