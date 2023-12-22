"use client";
import React from "react";
import { HiHeart } from "react-icons/hi";
import Button from "./Button";
import { supabase } from "@/app/_supabase/supabaseClient";
import { readUserSession } from "@/app/_supabase/actions";

async function AddToFavoritesButton({ offerID }: { offerID: number | null }) {
  //const [isFavorite, setIsFavorite] = useActive(false);

  const handleAddToFavorites = async (offerID: number | null) => {
    //check if user is logged in, if logged in find user row with the email, than add offerID to favorites column

    try {
      const { data } = await readUserSession();
      const userEmail = data.session?.user.email;
      console.log("USER:", userEmail);
      if (!userEmail) {
        console.log("User not logged in");
        return;
      }
      if (offerID === null) {
        console.log("offerID is null error");
        return;
      }
      let { data: Users, error } = await supabase
        .from("User")
        .update({ favorites: offerID }) //{ offerID: offerID }
        .eq("email", userEmail); //how to push to array?
      if (Users) {
        console.log("UPDATED:", Users, error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const label = { display: "flex", alignItems: "center" };
  return (
    <div
      style={label}
      onClick={(e) => {
        /*      setIsFavorite(!isFavorite); */
        e.stopPropagation();
        handleAddToFavorites(offerID);
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
      <Button id="addToFavorites" aria-label="Add to Favorites">
        <HiHeart /* style={{ color: isFavorite ? "#daa520" : "#fff" }} */ />
      </Button>
    </div>
  );
}

export default AddToFavoritesButton;
