import type { FC } from "react";
import { Section } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import Marquee from "react-fast-marquee";
import { slides } from "../../constants/slider";

const cx = classNames.bind(styles);

interface IGallery {
  id?: string;
  tag?: "section" | "div";
}

const Gallery: FC<IGallery> = ({ id, tag = "section" }) => {
  return (
    <Section className={cx(styles.gallery)} id={id} tag={tag}>
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
                <img src={slide.image} alt="" />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default Gallery;
