"use client";
import React from "react";
import CreateFormInput from "../CreateFormInput";
import DropdownNumberOfFloors from "../../Dropdown/CityDropdown";
import styles from "../CreateFormContactDetails.module.css";
import stylesInput from "../CreateFormInput.module.css";
import { useState, useEffect } from "react";
import useActive from "../../../_utils/useActive";
import { BiErrorAlt } from "react-icons/bi";

type CreateFormBasicInfromationTypes = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFloorInfo: (value: string) => void;
  inputValues: string | number;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleMax: (e: React.ChangeEvent<HTMLInputElement>, limit: number) => void;
  type: string;
};

function CreateFormBasicInfromation({
  handleChange,
  handleFloorInfo,
  inputValues,
  handleKeyDown,
  handleMax,
  type,
}: CreateFormBasicInfromationTypes) {
  interface Data {
    label: string;
    name: string;
    placeholder: string;
    labelText: string;
    f: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    limit: number;
  }

  const flatData: Data[] = [
    {
      label: "Area",
      name: "areaInfo",
      placeholder: "Enter Area",
      labelText: "Area (m²)",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "Number of Rooms",
      name: "numberOfRoomsInfo",
      placeholder: "Enter number of rooms",
      labelText: "Number of Rooms",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Price",
      name: "priceInfo",
      placeholder: "Enter Price",
      labelText: "Price",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const houseData: Data[] = [
    {
      label: "Area",
      name: "areaInfo",
      placeholder: "Enter Area",
      labelText: "Living Area (m²)",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "Usable Area",
      name: "usableArea",
      placeholder: "usable area",
      labelText: "Usable Area",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "Land Area",
      name: "landAreaInfo",
      placeholder: "land area",
      labelText: "Land Area (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Number of Rooms",
      name: "numberOfRoomsInfo",
      placeholder: "Enter number of rooms",
      labelText: "Number of Rooms",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Price",
      name: "priceInfo",
      placeholder: "Enter Price",
      labelText: "Price",
      f: handleKeyDown,
      limit: 10,
    },
    {
      label: "Number of Floors",
      name: "numbersOfFloorsInfo",
      placeholder: "number of floors",
      labelText: "Number of Floors in the Building",
      f: handleKeyDown,
      limit: 2,
    },
  ];

  const plotOfLandData: Data[] = [
    {
      label: "Area",
      name: "areaInfo",
      placeholder: "Enter Area",
      labelText: "Land Area (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Price",
      name: "priceInfo",
      placeholder: "Enter Price",
      labelText: "Price",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const commercialPropertyData: Data[] = [
    {
      label: "Area",
      name: "areaInfo",
      placeholder: "Enter Area",
      labelText: "Total Area (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Land Area",
      name: "landAreaInfo",
      placeholder: "land area",
      labelText: "Land Area (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Number of Rooms",
      name: "numberOfRoomsInfo",
      placeholder: "Enter number of rooms",
      labelText: "Number of Rooms",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Price",
      name: "priceInfo",
      placeholder: "Enter Price",
      labelText: "Price",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const garageData: Data[] = [
    {
      label: "Area",
      name: "areaInfo",
      placeholder: "Enter Area",
      labelText: "Total Area (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Price",
      name: "priceInfo",
      placeholder: "Enter Price",
      labelText: "Price",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const [checked, setChecked] = useActive(false);

  const [numberOfFloor, setNumberOfFloor] = useState({
    floorFrom: "",
    floorTo: "",
  });

  const numberOfFloorsData = Array.from({ length: 11 }, (element, index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const handleChangeNumberOfFloors = (
    ref: React.RefObject<HTMLInputElement>
  ) => {
    if (ref.current) {
      setNumberOfFloor({
        ...numberOfFloor,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    let x = parseInt(numberOfFloor.floorFrom);
    let y = parseInt(numberOfFloor.floorTo);
    if (x > y && y === 0) {
      setRenderError(() => false);
    } else if (x > y && y > 0) {
      setRenderError(() => true);
    } else if (x === y) {
      setRenderError(() => false);
    } else {
      setRenderError(() => false);
    }
    if (
      !renderError &&
      numberOfFloor.floorFrom.length > 0 &&
      numberOfFloor.floorTo.length > 0
    ) {
      let result = numberOfFloor.floorFrom + "/" + numberOfFloor.floorTo;
      handleFloorInfo(result);
    }
  }, [numberOfFloor.floorFrom, numberOfFloor.floorTo]);

  type DataType = {
    [key: string]: Data[];
  };

  function typeInputForm(type: string) {
    const data: DataType = {
      "Mieszkanie na sprzedaż": flatData,
      "Dom na sprzedaż": houseData,
      "Nieruchomość Komercyjna na sprzedaż": commercialPropertyData,
      "Działka na sprzedaż": plotOfLandData,
      "Garaż na sprzedaż": garageData,
    };

    const items = data[type];
    if (!items) return null;

    return items.map((item) => (
      <div style={{ width: "300px", padding: "10px" }} key={item.label}>
        <CreateFormInput
          data={item}
          handleChange={handleChange}
          handleMax={handleMax}
          key={item.name}
        />
      </div>
    ));
  }

  return (
    <article className={styles.article}>
      <h3 className={styles.title}>Basic Information</h3>

      <section className={styles.article_section}>
        {typeInputForm(type)}
        <div className={stylesInput.form_input_container}>
          <div style={{ width: "300px", padding: "10px" }}>
            <label>Cena za m²</label>
            <input
              type="text"
              disabled
              value={inputValues}
              className={stylesInput.form_input}
            />
          </div>
        </div>
        {type === "Mieszkanie na sprzedaż" ? (
          <div style={{ padding: "10px 0", position: "relative" }}>
            {renderError ? <BiErrorAlt className={styles.errorSvg} /> : null}
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                userSelect: "none",
              }}
            >
              Floor / Number of Floors
            </p>
            <div
              style={{
                backgroundColor: " #554971",
                width: "300px",
                height: "60px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: renderError ? "0px 0px 1px 3px #ED4F32" : undefined,
              }}
            >
              {/*    <DropdownNumberOfFloors
                //id="pietro"
                handleChange={handleChangeNumberOfFloors}
                data={numberOfFloorsData}
              /> */}
            </div>
            {renderError ? (
              <div
                style={{
                  width: "300px",
                  backgroundColor: "black",
                  color: "#fff",
                  textAlign: "justify",
                  borderRadius: "5px",
                  padding: "10px",
                  userSelect: "none",
                  margin: "5px 0 0 0",
                }}
              >
                The field 'floor' cannot be greater than the field 'number of
                floors'.
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </article>
  );
}

export default CreateFormBasicInfromation;
