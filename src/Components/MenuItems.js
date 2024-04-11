import React from "react";
import dishes from "./dishes";
import styles from "./MenuItems.module.css"

function MenuItems() {
  return (
    <React.Fragment>
      {dishes.map((dish) => (
        <dl className="my-5">
          <dt className={styles.dish}>
            <span>{dish.title}</span>
            <span>...............................................</span>
            <span>{dish.price}</span>
          </dt>
          <dd className={styles.description}>{dish.content}</dd>
        </dl>
      ))}
    </React.Fragment>
  );
}

export default MenuItems;
