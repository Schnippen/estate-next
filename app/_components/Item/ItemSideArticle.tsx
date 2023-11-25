import React from "react";
import styles from "../../_styles/ItemSideArticle.module.css";

//import ItemSideArticleCredit from "./ItemSideArticleCredit";
import RealtorData from "./ItemRealtorData";

import ItemSideArticleForm from "./ItemSideArticleForm";
import ItemSideArticleCredit from "./ItemSideArticleCredit";

function ItemSideArticle({ Offers }: { Offers: any[] | null }) {
  const Data = Offers ? Offers[0] : null;
  return (
    <article className={styles.container_article_side}>
      <section className={styles.section_sidebar}>
        <div className={styles.section_div}>
          <RealtorData Offers={Data} />
          <div>
            <ItemSideArticleForm />
          </div>
        </div>
         <ItemSideArticleCredit />
      </section>
    </article>
  );
}

export default ItemSideArticle;
