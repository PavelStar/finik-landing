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
  return (
    <button
      className={cx(styles.button, size, className)}
      type={type}
      onClick={onClick}
    >
      <ButtonBg className={cx(styles.background)} />
      <Paragraph
        className={cx(styles.text)}
        tag="span"
        size="M"
        textTransform="uppercase"
      >
        {children}
      </Paragraph>
      <span className={cx(styles.iconWrap)}>
        <ArrowIcon className={cx(styles.icon)} />
      </span>
    </button>
  );
};

export default Button;
