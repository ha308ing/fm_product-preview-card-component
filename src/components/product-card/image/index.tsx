import { ProductCardContext } from "../product-card";
import { useContext } from "react";
import style from "./image.module.css";

export const Image = () => {
  const { image_mobile, image_desktop, name } = useContext(ProductCardContext);
  return (
    <picture className={style.picture}>
      <source srcSet={image_desktop} media="(min-width:50em)" />
      <img src={image_mobile} alt={name} className={style.image} />
    </picture>
  );
};
