import styles from "./details.module.css";
import { Button } from "./button";
import { Category } from "./category";
import { Description } from "./description";
import { Name } from "./name";
import { Price } from "./price";
import type { PropsWithChildren } from "react";

const Details = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>{children}</div>
);

export default Object.assign(Details, {
  Button,
  Category,
  Description,
  Name,
  Price,
});
