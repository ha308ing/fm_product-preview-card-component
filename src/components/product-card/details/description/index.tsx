import { ProductCardContext } from "../../product-card";
import { useContext } from "react";
import styles from "./description.module.css";

export const Description = () => {
  const { description } = useContext(ProductCardContext);
  return <div className={styles.description}>{description}</div>;
};
