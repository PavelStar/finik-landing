import type { FC } from "react";
import styles from "./AccordionButton.module.scss";
import classNames from "classnames/bind";
import PlusIcon from "../../../assets/AccordionButton/plus.svg?react";
import MinusIcon from "../../../assets/AccordionButton/minus.svg?react";

const cx = classNames.bind(styles);

interface IAccordionButton {
  theme?: "light" | "dark";
  isOpen: boolean;
  className?: string;
}

const AccordionButton: FC<IAccordionButton> = ({
  theme = "dark",
  isOpen,
  className,
}) => {
  return (
    <div className={cx(styles.accordionButton, theme, className)}>
      {isOpen ? (
        <MinusIcon className={cx(styles.icon)} />
      ) : (
        <PlusIcon className={cx(styles.icon)} />
      )}
    </div>
  );
};

export default AccordionButton;
