import style from "./Contacts.module.css";
import logoImg from "../../../common/assets/logo.svg";
import { Button } from "../../../components/Button/Button";

export const Contacts = () => {
  return (
    <div className={style.root}>
      <div className={style.contactsBlock}>
        <div>
          <img src={logoImg} alt="logo" className={style.logo} />
        </div>
        <div className={style.contactItem}>
          <div className={style.title}>8 800 841-95-95</div>
          <div className={style.description}>Служба поддержки</div>
        </div>
        <div className={style.contactItem}>
          <div className={style.title}>support@sport.ru</div>
          <div className={style.description}>Служба поддержки</div>
        </div>
      </div>
      <div className={style.linkWrapper}>
        <div className={style.title}>Вакансии</div>
        <div className={style.title}>Блог</div>
        <div className={style.title}>Акции</div>
        <Button
          title="Предложить идею"
          type="grey"
          width="179px"
          height="48px"
          callback={() => "#"}
        />
      </div>
    </div>
  );
};
