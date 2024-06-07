import { useContext } from "react";
import { ProductCardContext } from "../../../product-card";
import styles from "./price-discount.module.css";

export const PriceDiscount = () => {
  const { currency, priceDiscount } = useContext(ProductCardContext);
  return (
    <div className={styles.priceDiscount}>
      {currency}
      {priceDiscount}
    </div>
  );
};
