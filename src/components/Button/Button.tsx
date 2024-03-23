import { FC } from "react";
import style from "./Button.module.css";

type Props = {
  type: "default" | "grey";
  title?: string;
  fontello?: string;
  titleImg?: string;
  width: string;
  height: string;
  callback: () => void;
};

export const Button: FC<Props> = ({
  title,
  fontello,
  type,
  titleImg,
  width,
  height,
  callback,
}) => {
  const onClickHandler = () => {
    callback();
  };

  return (
    <div>
      <button
        className={type === "default" ? style.btnDefault : style.btnGrey}
        style={{ width, height }}
        onClick={onClickHandler}
      >
        {fontello && <i className={`${fontello}`} />}
        {titleImg && <img src={titleImg} alt={"img"} />}
        {title && title}
      </button>
    </div>
  );
};
