import style from "./ProductItem.module.css";
import { Slider, SliderImg } from "./Slider/Slider";
import sneakers1 from "../../../common/assets/catalog/sneakers-1.svg";
import sneakers2 from "../../../common/assets/catalog/sneakers-2.svg";
import sneakers3 from "../../../common/assets/catalog/sneakers-3.svg";
import sneakers4 from "../../../common/assets/catalog/sneakers-4.svg";
import sneakers5 from "../../../common/assets/catalog/sneakers-5.svg";
import { ProductInfo } from "./ProductInfo/ProductInfo";

export const ProductItem = () => {
  const sliderImg: SliderImg[] = [
    { id: 0, img: sneakers1 },
    { id: 1, img: sneakers2 },
    { id: 2, img: sneakers3 },
    { id: 3, img: sneakers4 },
    { id: 4, img: sneakers5 },
  ];
  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.path}>
          <div className={style.pathItem}>
            <a href="/catalog">Каталог</a>
          </div>
          <div className={style.pathItem}>
            <a href="catalog/shoos">
              <span className={style.slash}>/</span> Обувь
            </a>
          </div>
          <div className={style.pathItem}>
            <a href="catalog/shoos/sneakers">
              <span className={style.slash}>/</span> Кроссовки
            </a>
          </div>
          <div className={style.pathItem}>
            <a href="catalog/shoos/sneakers/ran">
              <span className={style.slash}>/</span> Беговые
            </a>
          </div>
        </div>
        <div className={style.title}>Кроссовки мужские Skechers Sunny Dale</div>
      </div>
      <div className={style.itemBLock}>
        <Slider sliderImg={sliderImg} />
        <ProductInfo />
      </div>
    </div>
  );
};
