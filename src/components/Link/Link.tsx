import type { FC, ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ILink {
  children?: ReactNode;
  text?: string;
  target?: "_self" | "_blank";
  color?: "light" | "dark" | "grey";
  size?: "S" | "M" | "L" | "XL";
  weight?: "bold" | "medium" | "regular";
  textDecoration?: "underline" | "none";
  textTransform?: "uppercase" | "capitalize";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Link: FC<ILink> = ({
  children,
  text = "",
  target = "_self",
  color = "light",
  size = "M",
  weight = "regular",
  textDecoration = "none",
  textTransform,
  href,
  className,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      className={cx(
        styles.link,
        color,
        size,
        weight,
        textDecoration,
        textTransform,
        className
      )}
      target={target}
      href={href}
      onClick={handleClick}
    >
      {children ? children : text}
    </a>
  );
};

export default Link;
