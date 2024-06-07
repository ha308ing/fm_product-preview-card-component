import styles from "./button.module.css";

export const Button = () => (
  <button className={styles.button}>
    <img src="/icon-cart.svg" alt="" className={styles.button_icon} />
    <span className={styles.button_text}>Add to Cart</span>
  </button>
);
