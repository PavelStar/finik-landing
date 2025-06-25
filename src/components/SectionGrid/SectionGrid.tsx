import type { FC } from "react";
import styles from "./SectionGrid.module.scss";
import classNames from "classnames/bind";
import { Title } from "../index";

const cx = classNames.bind(styles);

interface ISectionGrid {
  title?: string;
  isBgTransparent?: boolean;
  children?: React.ReactNode;
  className?: string;
  titleWrapClassName?: string;
  contentClassName?: string;
}

const SectionGrid: FC<ISectionGrid> = ({
  title = "",
  isBgTransparent = false,
  children,
  className,
  titleWrapClassName,
  contentClassName,
}) => {
  return (
    <div
      className={cx(
        styles.sectionGrid,
        { [styles.transparent]: isBgTransparent },
        className
      )}
    >
      <div className={cx(styles.titleWrap, titleWrapClassName)}>
        {title && (
          <Title size="M" weight="regular" color="darkGrey" text={title} />
        )}
      </div>
      <div className={cx(styles.contentWrap, contentClassName)}>{children}</div>
    </div>
  );
};

export default SectionGrid;
