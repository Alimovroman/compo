import { Products } from "./Products/Products";
import style from "./Main.module.css";
import { Contacts } from "./Contacts/Contacts";

export const Main = () => {
  const productsWomen: Products[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
    { name: "Bra fitting", path: "#" },
  ];
  const productsMen: Products[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
  ];
  const productsKids: Products[] = [
    { name: "Одежда", path: "#" },
    { name: "Обувь", path: "#" },
    { name: "Аксессуары", path: "#" },
    { name: "Белье", path: "#" },
    { name: "Игрушки", path: "#" },
    { name: "Малыши", path: "#" },
  ];
  const productsSports: Products[] = [
    { name: "Велосипет", path: "#" },
    { name: "Туризм", path: "#" },
    { name: "Тренажеры и фитнес", path: "#" },
    { name: "Командные виды спорта", path: "#" },
    { name: "Самокаты", path: "#" },
  ];

  return (
    <div className={style.root}>
      <Contacts />
      <div className={style.productsBlock}>
        <Products title="Женщинам" products={productsWomen} />
        <Products title="Мужчинам" products={productsMen} />
        <Products title="Детям" products={productsKids} />
        <Products title="Виды спорта" products={productsSports} />
      </div>
    </div>
  );
};
