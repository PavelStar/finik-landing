import type { FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import ArrowIcon from "../../assets/arrow-icon.svg?react";
import ButtonBg from "../../assets/button-bg.svg?react";
import Paragraph from "../Paragraph/Paragraph";

const cx = classNames.bind(styles);

interface IButton {
  type?: "button" | "submit";
  children?: string;
  size?: "S" | "M" | "L" | "XL";
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  type = "button",
  children,
  size = "S",
  className,
  onClick,
}) => {
  const SvgC = () => {
    return (
      <svg
        width="0"
        height="0"
        className={styles.filter}
        colorInterpolationFilters="sRGB"
      >
        <defs>
          <filter id="buttonFilter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="buttonFilter"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="buttonFilter"
              operator="atop"
            ></feComposite>
            <feBlend in="SourceGraphic" in2="buttonFilter"></feBlend>
          </filter>
        </defs>
      </svg>
    );
  };
  return (
    <button
      className={cx(styles.button, size, className)}
      type={type}
      onClick={onClick}
      // style={{ filter: `url(#buttonFilter)` }}
    >
      <SvgC />
      {/* <ButtonBg className={cx(styles.background)} /> */}
      <div className={cx(styles.textWrap)}>
        <Paragraph
          className={cx(styles.text)}
          tag="span"
          size="M"
          textTransform="uppercase"
          weight="medium"
        >
          {children}
        </Paragraph>
      </div>
      <span className={cx(styles.iconWrap)}>
        <ArrowIcon className={cx(styles.icon)} />
      </span>
    </button>
  );
};

export default Button;
