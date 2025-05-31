import type { FC, ReactNode } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ILink {
  children?: ReactNode;
  text?: string;
  color?: "light" | "dark";
  size?: "S" | "M" | "L" | "XL";
  href?: string;
  className?: string;
}

const Link: FC<ILink> = ({
  children,
  text = "",
  color = "light",
  size = "S",
  href,
  className,
}) => {
  return (
    <a className={cx(styles.link, color, size, className)} href={href}>
      {children ? children : text}
    </a>
  );
};

export default Link;
