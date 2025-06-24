import type { FC, JSX, ReactNode } from "react";
import Container from "../Container/Container";
import styles from "./Section.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ISection {
  id?: string;
  theme?: "light" | "dark" | "transparent";
  tag?: "section" | "div" | "header" | "footer";
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: FC<ISection> = ({
  id,
  theme = "light",
  tag = "section",
  fullWidth = false,
  children,
  className,
  containerClassName,
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cx(styles.section, theme, className)} id={id}>
      <Container className={containerClassName || ""} fullWidth={fullWidth}>
        {children}
      </Container>
    </Tag>
  );
};

export default Section;
