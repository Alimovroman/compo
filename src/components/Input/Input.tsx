import { ChangeEvent, FC, useState } from "react";
import style from "./Input.module.css";
import clearImg from "../../common/assets/clear.svg";
import searchImg from "../../common/assets/search.svg";

type Props = {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
  callback: (e: string) => void;
};

export const Input: FC<Props> = ({
  type,
  placeholder,
  height,
  width,
  callback,
}) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClearValue = () => {
    setValue("");
  };
  const onSearch = () => {
    callback(value);
  };
  return (
    <div className={style.root}>
      <input
        value={value}
        onChange={onChangeValue}
        type={type}
        placeholder={placeholder}
        className={style.input}
        style={{ width, height }}
      />
      <div className={style.imgBlock}>
        <div onClick={onClearValue}>
          <img src={clearImg} alt="clear" />
        </div>
        <div onClick={onSearch}>
          <img src={searchImg} alt="search" />
        </div>
      </div>
    </div>
  );
};
