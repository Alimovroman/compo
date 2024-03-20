import { FC } from "react";
import style from "./Button.module.css";

type Props = {
  title: string;
  titleImg?: string;
  width: string;
  height: string;
  callback: () => void;
};

export const Button: FC<Props> = ({
  title,
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
        className={style.btn}
        style={{ width, height }}
        onClick={onClickHandler}
      >
        {titleImg && <img src={titleImg} alt={"img"} />}
        {title}
      </button>
    </div>
  );
};
