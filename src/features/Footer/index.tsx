import style from "./Footer.module.css";
import logoImg from "../../common/assets/logo-grey.svg";
import pdfImg from "../../common/assets/pdf.svg";
import videoImg from "../../common/assets/video.svg";
import faqImg from "../../common/assets/faq.svg";
import youtubeImg from "../../common/assets/youtube.svg";

export const Footer = () => {
  return (
    <div className={style.root}>
      <div className={style.links}>
        <div className={style.linkItem}>
          <div className={style.linkIcon}>
            <img src={pdfImg} alt="pdf" />
          </div>
          <div className={style.linkText}>PDF презентация</div>
        </div>
        <div className={style.linkItem}>
          <div className={style.linkIcon}>
            <img src={videoImg} alt="video" />
          </div>
          <div className={style.linkText}>Видео инструкция</div>
        </div>
        <div className={style.linkItem}>
          <div className={style.linkIcon}>
            <img src={faqImg} alt="faq" />
          </div>
          <div className={style.linkText}>FAQ</div>
        </div>
        <div className={style.linkItem}>
          <div className={style.linkIcon}>
            <img src={youtubeImg} alt="youtube" />
          </div>
          <div className={style.linkTextYoutube}>Мы на YouTube</div>
        </div>
        <div className={style.linkItem}>
          <div className={style.linkText}>Политика конфиденциальности </div>
        </div>
        <div className={style.linkItem}>
          <div className={style.linkText}>Лицензионное соглашение</div>
        </div>
      </div>
      <div className={style.description}>
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </div>
      <div className={style.logoWrapper}>
        <div>
          <img src={logoImg} alt="logo" className={style.logo} />
        </div>
        <div className={style.logoText}>Разработка платформы</div>
      </div>
    </div>
  );
};
