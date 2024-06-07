import { Image } from "./image";
import { Details } from "./details";
import { PropsWithChildren, createContext } from "react";
import styles from "./product-card.module.css";

export enum CURRENCY {
  USD = "$",
  EUR = "€",
  GBP = "£",
  JPY = "¥",
}

export type ProductType = {
  category: string;
  name: string;
  description: string;
  priceDiscount: string;
  priceFull: string;
  currency: CURRENCY;
  image_mobile: string;
  image_desktop: string;
};

type ProductCardProps = PropsWithChildren<{
  productInfo?: ProductType;
}>;

const productInfoDefault = {
  category: "Perfume",
  currency: CURRENCY.USD,
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  image_mobile: "/image-product-mobile.jpg",
  image_desktop: "/image-product-desktop.jpg",
  name: "Gabrielle Essence Eau De Parfum",
  priceDiscount: "149.99",
  priceFull: "169.99",
};

export const ProductCardContext = createContext(productInfoDefault);

const ProductCard = ({
  productInfo = productInfoDefault,
  children,
}: ProductCardProps) => {
  return (
    <ProductCardContext.Provider value={productInfo}>
      <div className={styles.card}>{children}</div>
    </ProductCardContext.Provider>
  );
};

export default Object.assign(ProductCard, {
  Image,
  Details,
});
