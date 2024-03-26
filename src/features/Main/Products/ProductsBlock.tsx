import { Product, Products } from "./Products";
import style from "./Products.module.css";

export const ProductsBlock = () => {
  const productsWomen: Product[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
    { name: "Bra fitting", path: "#" },
  ];
  const productsMen: Product[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
  ];
  const productsKids: Product[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
    { name: "Игрушки", path: "#" },
    { name: "Малыши", path: "#" },
  ];
  const productsSports: Product[] = [
    { name: "Велосипет", path: "#" },
    { name: "Туризм", path: "#" },
    { name: "Тренажеры и фитнес", path: "#" },
    { name: "Командные виды спорта", path: "#" },
    { name: "Самокаты", path: "#" },
  ];
  return (
    <div className={style.productsBlock}>
      <Products title="Женщинам" products={productsWomen} />
      <Products title="Мужчинам" products={productsMen} />
      <Products title="Детям" products={productsKids} />
      <Products title="Виды спорта" products={productsSports} />
    </div>
  );
};
