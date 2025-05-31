import type { FC, JSX, ReactNode } from "react";
import styles from "./Section.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ISection {
  children: ReactNode;
  tag?: "section" | "div";
  className?: string;
}

const Section: FC<ISection> = ({ children, tag = "section", className }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={cx(styles.section, className)}>{children}</Tag>;
};

export default Section;
