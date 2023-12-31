import React from "react";
import styles from "../../_styles/UserLayout.module.css";
import { redirect } from "next/navigation";
import { readUserSession } from "@/app/_supabase/actions";
import { supabase } from "@/app/_supabase/supabaseClient";
import ListingItem from "@/app/_components/ListItem/ListingItem";
import Link from "next/link";

async function page() {
  const { data } = await readUserSession();
  const userEmail = data.session?.user.email;
  console.log("USER:", userEmail);
  if (!userEmail) {
    console.log("User not logged in");
    return;
  }
  let { data: UsersFavorites } = await supabase
    .from("User")
    .select("favorites") //{ offerID: offerID }
    .eq("email", userEmail); //how to push to array?
  let SelectedUserFavorites = UsersFavorites
    ? UsersFavorites[0].favorites
    : null;
  console.log(SelectedUserFavorites);
  if (!UsersFavorites) {
    console.log("There is no user favorites");
    return null;
  }
  let { data: Favorites, error } = await supabase
    .from("Offer")
    .select("*")
    .eq("offerID", SelectedUserFavorites);
  //console.log("FAVORITES:", Favorites);

  const List = () => {
    if (!Favorites) {
      <div className={styles.no_favorites}>
        <h1>No favorites yet</h1>;
      </div>;
    }
    return Favorites?.map((item) => (
      <Link href={`/offers/${item.offerID}`}>
        <ListingItem key={item.offerID} data={item} />
      </Link>
    ));
  };

  return (
    <section className={styles.mainSectionFormContainerFavorites}>
      <List />
    </section>
  );
}

export default page;
