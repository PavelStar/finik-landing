import type { FC } from "react";
import styles from "./Logo.module.scss";
import classNames from "classnames/bind";
import FinikLogo from "../../assets/finik-logo.svg?react";

const cx = classNames.bind(styles);

interface ILogo {
  color?: "light" | "dark";
  className?: string;
}

const Logo: FC<ILogo> = ({ color = "light", className }) => {
  return (
    <>
      <FinikLogo className={cx(styles.logo, color, className)} />
    </>
  );
};

export default Logo;
