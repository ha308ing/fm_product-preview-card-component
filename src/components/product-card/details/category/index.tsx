import { ProductCardContext } from "../../product-card";
import { useContext } from "react";
import styles from "./category.module.css";

export const Category = () => {
  const { category } = useContext(ProductCardContext);

  return <div className={styles.category}>{category}</div>;
};
