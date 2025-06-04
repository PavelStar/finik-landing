import type { FC, ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ILink {
  children?: ReactNode;
  text?: string;
  color?: "light" | "dark" | "grey";
  size?: "S" | "M" | "L" | "XL";
  textDecoration?: "underline" | "none";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Link: FC<ILink> = ({
  children,
  text = "",
  color = "light",
  size = "M",
  textDecoration = "none",
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
      className={cx(styles.link, color, size, textDecoration, className)}
      href={href}
      onClick={handleClick}
    >
      {children ? children : text}
    </a>
  );
};

export default Link;
