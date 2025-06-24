import type { FC, ReactNode } from "react";
import styles from "./Container.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IContainer {
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainer> = ({
  fullWidth = false,
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        styles.container,
        { [styles.fullWidth]: fullWidth },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
