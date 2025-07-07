import type { FC } from "react";
import classNames from "classnames/bind";
import { Picture } from "../../components/index";
import styles from "./Gallery.module.scss";
import Marquee from "react-fast-marquee";
import type { ISlide } from "../../types/types";
// import { slides } from "../../constants/slider";

const cx = classNames.bind(styles);

interface IGallery {
  id?: string;
  slides: Array<ISlide>;
}

const Gallery: FC<IGallery> = ({ slides }) => {
  return (
    <div className={cx(styles.gallery)}>
      <Marquee
        className={cx(styles.marquee)}
        gradient={false}
        speed={100}
        pauseOnHover={false}
        autoFill={true}
      >
        <ul className={cx(styles.list)}>
          {slides.map((slide) => {
            return (
              <li key={slide.id}>
                <Picture {...slide.image} />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </div>
  );
};

export default Gallery;
