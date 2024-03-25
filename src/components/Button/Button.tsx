import { FC } from "react";
import style from "./Button.module.css";

type Props = {
  type: "default" | "grey";
  children: React.ReactNode;
  width: string;
  height: string;
  callback: () => void;
};

export const Button: FC<Props> = ({
  children,
  type,
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
        {children}
      </button>
    </div>
  );
};
