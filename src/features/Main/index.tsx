import style from "./Main.module.css";
import { Contacts } from "./Contacts/Contacts";
import { ProductsBlock } from "./Products/ProductsBlock";
import { ProductItem } from "./ProductItem/ProductItem";

export const Main = () => {
  return (
    <div>
      <ProductItem />
      <Contacts />
      <ProductsBlock />
    </div>
  );
};
