"use client"
import React from "react";
import { HiHeart } from "react-icons/hi";
import Button from "./Button";

function AddToFavoritesButton() {
  //const [isFavorite, setIsFavorite] = useActive(false);

  /*   const handleAddFavorite = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const isItemInFavorites = storedFavorites.includes(offerID);

    if (!isItemInFavorites) {
      storedFavorites.push(offerID);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    } else {
      const updatedFavorites = storedFavorites.filter(
        (itemId: number) => itemId !== offerID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }; */

  /*   useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const isItemInFavorites = storedFavorites.includes(offerID);
    setIsFavorite(isItemInFavorites);
  }, [isFavorite, offerID]); */

  const label = { display: "flex", alignItems: "center" };

  return (
    <div
      style={label}
      onClick={() => {
        /*      setIsFavorite(!isFavorite);
        handleAddFavorite(); */
      }}
    >
      {/*       {labelOn ? (
        <label
          htmlFor="addToFavorites"
          style={{ userSelect: "none", cursor: "pointer", margin: "0 10px" }}
        >
          Dodaj do ulubionych
        </label>
      ) : null} */}
      <Button id="addToFavorites">
        <HiHeart /* style={{ color: isFavorite ? "#daa520" : "#fff" }} */ />
      </Button>
    </div>
  );
}

export default AddToFavoritesButton;
