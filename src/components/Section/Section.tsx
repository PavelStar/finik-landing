import type { FC, JSX, ReactNode } from "react";
import styles from "./Section.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ISection {
  id?: string;
  children: ReactNode;
  tag?: "section" | "div";
  className?: string;
}

const Section: FC<ISection> = ({
  id,
  children,
  tag = "section",
  className,
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cx(styles.section, className)} id={id}>
      {children}
    </Tag>
  );
};

export default Section;
