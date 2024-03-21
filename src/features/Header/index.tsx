import style from "./Header.module.css";
import logoImg from "../../common/assets/logo.svg";
import menuImg from "../../common/assets/menu.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import bellImg from "../../common/assets/bell.svg";

export const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.firstBlockWrapper}>
        <div>
          <img src={logoImg} alt="logo" className={style.logo} />
        </div>
        <Button
          title={"Меню"}
          titleImg={menuImg}
          width="127px"
          height="48px"
          callback={() => "#"}
        />
        <Input
          type="text"
          placeholder="Название запроса"
          width="602px"
          height="48px"
          callback={() => "#"}
        />
        <div>
          <img src={bellImg} alt="bell" />
        </div>
        <div className={style.fontelloWrapper}>
          <i className="icon-heart" />
        </div>
      </div>
    </div>
  );
};
