import type { FC, JSX, ReactNode } from "react";
import styles from "./Title.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ITitle {
  text?: string;
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4;
  color?: "light" | "lightGrey" | "darkGrey";
  size?: "S" | "M" | "L" | "XL";
  weight?: "extraBold" | "bold" | "medium" | "regular";
  textTransform?: "uppercase" | "capitalize";
  className?: string;
}

const Title: FC<ITitle> = ({
  text,
  children,
  level = 2,
  color = "light",
  size = "M",
  weight = "medium",
  textTransform = "capitalize",
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  if (text) {
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
        {...(text ? { dangerouslySetInnerHTML: { __html: text } } : {})}
      />
    );
  }

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

export default Title;
