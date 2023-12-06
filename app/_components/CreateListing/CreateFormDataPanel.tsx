import { GiHomeGarage } from "react-icons/gi";
import { BiLandscape, BiHome } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";

interface PanelData {
  label: string;
  text: string;
  name: string;
  value: string;
  icon: JSX.Element;
}

export const PanelData: PanelData[] = [
  {
    label: "Apartment",
    text: "Apartment",
    name: "string1",
    value: "Mieszkanie",
    icon: <FaRegBuilding />,
  },
  {
    label: "House",
    text: "House",
    name: "string1",
    value: "Dom",
    icon: <BiHome />,
  },
  {
    label: "Land",
    text: "Land",
    name: "string1",
    value: "Działka",
    icon: <BiLandscape />,
  },
  {
    label: "Commercial Property",
    text: "Commercial Property",
    name: "string1",
    value: "Nieruchomość Komercyjna",
    icon: <SiHomeassistantcommunitystore />,
  },
  {
    label: "Garage",
    text: "Garage",
    name: "string1",
    value: "Garaż",
    icon: <GiHomeGarage />,
  },
];
