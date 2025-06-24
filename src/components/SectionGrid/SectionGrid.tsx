import type { FC } from "react";
import styles from "./SectionGrid.module.scss";
import classNames from "classnames/bind";
import { Title } from "../index";

const cx = classNames.bind(styles);

interface ISectionGrid {
  title?: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
  className?: string;
  titleWrapClassName?: string;
  contentClassName?: string;
}

const SectionGrid: FC<ISectionGrid> = ({
  title = "",
  theme = "light",
  children,
  className,
  titleWrapClassName,
  contentClassName,
}) => {
  return (
    <div className={cx(styles.sectionGrid, theme, className)}>
      <div className={cx(styles.titleWrap, titleWrapClassName)}>
        {title && (
          <Title
            size="M"
            color={theme === "light" ? "lightGrey" : "darkGrey"}
            weight="regular"
          >
            {title}
          </Title>
        )}
      </div>
      <div className={cx(styles.contentWrap, contentClassName)}>{children}</div>
    </div>
  );
};

export default SectionGrid;
