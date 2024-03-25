import style from "./Header.module.css";
import logoImg from "../../common/assets/logo.svg";
import menuImg from "../../common/assets/menu.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import bellImg from "../../common/assets/bell.svg";
import cartImg from "../../common/assets/cart.svg";
import avatarImg from "../../common/assets/avatar.svg";
import arrowDownImg from "../../common/assets/arrow-down.svg";
import messengerImg from "../../common/assets/messenger.svg";

export const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.firstBlockWrapper}>
        <div>
          <img src={logoImg} alt="logo" className={style.logo} />
        </div>
        <Button type="default" width="127px" height="48px" callback={() => "#"}>
          <img src={menuImg} alt="menu" /> Меню
        </Button>
        <Input
          type="text"
          placeholder="Название запроса"
          width="602px"
          height="48px"
          callback={() => "#"}
        />
        <div className={style.bellWrapper}>
          <img src={bellImg} alt="bell" />
        </div>
        <div className={style.fontelloWrapper}>
          <i className="icon-heart" />
        </div>
        <Button type="grey" height="48px" width="148px" callback={() => "#"}>
          <img src={cartImg} alt="cart" /> 144 255₽
        </Button>
        <div className={style.burgerMenu}>
          <div>
            <img src={avatarImg} alt="avatar" />
          </div>
          <div>Ермаков Е.</div>
          <div>
            <button className={style.burgerMenuBtn}>
              <img src={arrowDownImg} alt="arrowDown" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.secondLine}>
        <div className={style.navigationWrapper}>
          <div className={style.navigation}>Мои заказы</div>
          <div className={style.navigation}>Мои Сотрудники</div>
          <div className={style.navigation}>Шаблоны заказов</div>
          <div className={style.navigation}>Обращения</div>
        </div>
        <div className={style.ohterLink}>
          <Button callback={() => "#"} type="grey" height="32px" width="152px">
            <img src={messengerImg} alt="messenger" /> Ваш менеджер
          </Button>
          <div className={style.discount}>% &#160;&#160; Aкции</div>
          <div>Blog</div>
        </div>
      </div>
    </div>
  );
};
