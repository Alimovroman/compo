import { Button } from "../../../../components/Button/Button";
import style from "./ProductInfo.module.css";
import { CustomizedSwitch } from "./Switch";
import cartImg from "../../../../common/assets/cart.svg";

export const ProductInfo = () => {
  return (
    <div className={style.root}>
      <div>
        <div className={style.buying}>
          <div className={style.withoutDiscount}>
            166 534.00 цена без скидки
          </div>
          <div className={style.cost}>
            122 566 ₽ <span className={style.discount}>-15%</span>
          </div>
          <div className={style.box}>
            <div className={style.countInBox}>12 штук в уп.</div>
            <CustomizedSwitch />
          </div>
          <div className={style.warehouseWrapper}>
            <div className={style.warehouse}>
              <div className={style.title}>Завтра</div>
              <div className={style.text}>Доставка</div>
            </div>
            <div className={style.warehouse}>
              <div className={style.title}>7 шт.</div>
              <div className={style.text}>Тарасовка</div>
            </div>
            <div className={style.warehouse}>
              <div className={style.title}>7 шт.</div>
              <div className={style.text}>Тарасовка</div>
            </div>
          </div>
          <div className={style.btnWrapper}>
            <Button
              title="В корзину"
              callback={() => "#"}
              type="default"
              width="284px"
              height="56px"
            />
            <Button
              fontello="icon-heart"
              type="grey"
              callback={() => "#"}
              width="72px"
              height="56px"
            />
          </div>
        </div>
      </div>
      <div className={style.descriptionWrapper}>
        <div className={style.descriptionHeader}>Описание товара</div>
        <div className={style.description}>
          Создание приверженного покупателя специфицирует неопровержимый
          комплексный анализ ситуации. CTR существенно индуцирует из ряда вон
          выходящий SWOT-анализ. Воздействие на потребителя определяет
          возрастающий интеграл по поверхности, что известно даже школьникам.
          Отсюда естественно следует, что коммуникация уравновешивает косвенный
          фактор коммуникации. Поле направлений естественно допускает
          экспериментальный скачок функции, таким образом сбылась мечта идиота -
          утверждение полностью доказано. Арифметическая прогрессия притягивает
          линейно зависимый пул лояльных изданий.
        </div>
      </div>
    </div>
  );
};