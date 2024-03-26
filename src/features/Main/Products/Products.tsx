import { FC } from "react";
import style from "./Products.module.css";

export type Product = {
  name: string;
  path: string;
};

type Props = {
  title: string;
  products: Product[];
};

export const Products: FC<Props> = ({ title, products }) => {
  return (
    <div className={style.root}>
      <div className={style.header}>{title}</div>
      <ul className={style.products}>
        {products.map((p, i) => (
          <li key={i}>
            <a href={p.path}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
