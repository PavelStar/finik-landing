import type { FC } from "react";
import styles from "./MobileMenuButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IMenu {
  isMenuShown: boolean;
  className?: string;
  onClick: () => void;
}

const MobileMenuButton: FC<IMenu> = ({ isMenuShown, className, onClick }) => {
  return (
    <button
      className={cx(
        styles.mobileMenuButton,
        isMenuShown ? styles.open : "",
        className
      )}
      type="button"
      onClick={onClick}
    >
      <span className={cx(styles.line, isMenuShown ? styles.open : "")}></span>
      <span className={cx(styles.line, isMenuShown ? styles.open : "")}></span>
      <span className={cx(styles.line, isMenuShown ? styles.open : "")}></span>
      <span className={cx(styles.line, isMenuShown ? styles.open : "")}></span>
    </button>
  );
};

export default MobileMenuButton;
