import { ProductCardContext } from "../../product-card";
import { useContext } from "react";
import styles from "./name.module.css";

export const Name = () => {
  const { name } = useContext(ProductCardContext);
  return <h1 className={styles.name}>{name}</h1>;
};
