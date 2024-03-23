import { FC } from "react";
import style from "./Button.module.css";

type Props = {
  type: "default" | "grey";
  title?: string;
  titleImg?: string;
  width: string;
  height: string;
  callback: () => void;
};

export const Button: FC<Props> = ({
  title,
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
        {titleImg && <img src={titleImg} alt={"img"} />}
        {title && title}
      </button>
    </div>
  );
};
