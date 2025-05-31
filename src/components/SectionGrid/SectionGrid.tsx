import type { FC } from "react";
import styles from "./SectionGrid.module.scss";
import classNames from "classnames/bind";
import { Title } from "../index";

const cx = classNames.bind(styles);

interface ISectionGrid {
  title: string;
  titleColor?: "light" | "dark" | "grey";
  children?: React.ReactNode;
  className?: string;
  titleWrapClassName?: string;
  contentClassName?: string;
}

const SectionGrid: FC<ISectionGrid> = ({
  title,
  titleColor = "dark",
  children,
  className,
  titleWrapClassName,
  contentClassName,
}) => {
  return (
    <div className={cx(styles.sectionGrid, className)}>
      <div className={cx(styles.titleWrap, titleWrapClassName)}>
        <Title size="M" color={titleColor} weight="regular">
          {title}
        </Title>
      </div>
      <div className={cx(styles.contentWrap, contentClassName)}>{children}</div>
    </div>
  );
};

export default SectionGrid;
