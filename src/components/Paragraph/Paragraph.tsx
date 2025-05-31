import type { FC, JSX, ReactNode } from "react";
import styles from "./Paragraph.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IParagraph {
  children: ReactNode;
  tag?: "span" | "p";
  color?: "light" | "dark" | "grey";
  size?: "S" | "M" | "L" | "XL";
  weight?: "bold" | "medium" | "regular";
  textTransform?: "uppercase" | "capitalize";
  className?: string;
}

const Paragraph: FC<IParagraph> = ({
  children,
  tag = "p",
  color = "light",
  size = "M",
  weight = "regular",
  textTransform = "capitalize",
  className,
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cx(
        styles.paragraph,
        color,
        size,
        weight,
        textTransform,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Paragraph;
