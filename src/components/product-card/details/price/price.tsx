import { PriceDiscount } from "./price-discount";
import { PriceFull } from "./price-full";
import styles from "./price.module.css";

const Price = () => (
  <div className={styles.price}>
    <PriceDiscount />
    <PriceFull />
  </div>
);

export default Object.assign(Price, { PriceDiscount, PriceFull });
