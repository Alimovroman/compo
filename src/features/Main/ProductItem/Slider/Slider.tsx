import { FC, useEffect, useState } from "react";
import style from "./Slider.module.css";
import { Button } from "../../../../components/Button/Button";
import arrowLeftImg from "../../../../common/assets/arrow-left.svg";
import arrowRightImg from "../../../../common/assets/arrow-right.svg";
import { log } from "console";

export type SliderImg = {
  id: number;
  img: string;
};

type Props = {
  sliderImg: SliderImg[];
};

export const Slider: FC<Props> = ({ sliderImg }) => {
  const [count, setCount] = useState(0);
  const [startCountMenu, setStartCountMenu] = useState(0);
  const [endCountMenu, setEndCountMenu] = useState(3);
  const [activeImg, setActiveImg] = useState(sliderImg[count].img);
  const [imagesMenu, setImagesMenu] = useState(
    sliderImg.filter((e, i) => i >= startCountMenu && i <= endCountMenu)
  );
  const maxCount = sliderImg.length - 1;

  const onIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
      setActiveImg(sliderImg[count + 1].img);
    }
    if (endCountMenu < maxCount) {
      setEndCountMenu(endCountMenu + 1);
      setStartCountMenu(startCountMenu + 1);
      setImagesMenu(
        sliderImg.filter(
          (e, i) => i >= startCountMenu + 1 && i <= endCountMenu + 1
        )
      );
    }
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setActiveImg(sliderImg[count - 1].img);
    }
    if (startCountMenu > 0) {
      setEndCountMenu(endCountMenu - 1);
      setStartCountMenu(startCountMenu - 1);
      setImagesMenu(
        sliderImg.filter(
          (e, i) => i >= startCountMenu - 1 && i <= endCountMenu - 1
        )
      );
    }
  };
  const onChengeImg = (id: number) => {
    setCount(id);
    setActiveImg(sliderImg[id].img);
  };

  return (
    <div className={style.slider}>
      <div>
        <img src={activeImg} alt="img" className={style.mainImg} />
      </div>
      <div className={style.sliderMenu}>
        <Button width="38px" height="64px" type="grey" callback={onDecrement}>
          <img src={arrowLeftImg} alt="arrow" />
        </Button>
        <div className={style.images}>
          {imagesMenu.map((e, i) => (
            <div key={e.id} onClick={() => onChengeImg(e.id)}>
              <img src={e.img} alt="img" className={style.image} />
            </div>
          ))}
        </div>
        <Button width="38px" height="64px" type="grey" callback={onIncrement}>
          <img src={arrowRightImg} alt="arrow" />
        </Button>
      </div>
    </div>
  );
};
