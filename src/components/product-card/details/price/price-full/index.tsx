import { useContext } from "react";
import { ProductCardContext } from "../../../product-card";
import styles from "./price-full.module.css";

export const PriceFull = () => {
  const { currency, priceFull } = useContext(ProductCardContext);
  return (
    <div className={styles.priceFull}>
      {currency}
      {priceFull}
    </div>
  );
};
