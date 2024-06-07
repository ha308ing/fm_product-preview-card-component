import styles from "./app.module.css";
import { ProductCard } from "../product-card";

export const App = () => (
  <main className={styles.main}>
    <ProductCard>
      <ProductCard.Image />
      <ProductCard.Details>
        <ProductCard.Details.Category />
        <ProductCard.Details.Name />
        <ProductCard.Details.Description />
        <ProductCard.Details.Price />
        <ProductCard.Details.Button />
      </ProductCard.Details>
    </ProductCard>
  </main>
);
