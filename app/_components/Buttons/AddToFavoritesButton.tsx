"use client";
import React from "react";
import { HiHeart } from "react-icons/hi";
import Button from "./Button";
import { supabase } from "@/app/_supabase/supabaseClient";
import { readUserSession } from "@/app/_supabase/actions";

function AddToFavoritesButton({ offerID }: { offerID: number }) {
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
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]); */

  const handleAddToFavorites = async () => {
    //check if user is logged in, if logged in find user row with the email, than add offerID to favorites column
    const { data, error } = await readUserSession();
    const { session } = data;

    return console.log(session, error);
  };

  const label = { display: "flex", alignItems: "center" };
  console.log(offerID);
  return (
    <div
      style={label}
      onClick={() => {
        /*      setIsFavorite(!isFavorite);
        handleAddFavorite(); */
        handleAddToFavorites();
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
