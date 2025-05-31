import type { FC } from "react";
import styles from "./WorkCard.module.scss";
import classNames from "classnames/bind";
import Paragraph from "../Paragraph/Paragraph";

const cx = classNames.bind(styles);

export interface IWorkCard {
  id?: number;
  number: number | string;
  title: string;
  className?: string;
}

const WorkCard: FC<IWorkCard> = ({ number, title, className }) => {
  return (
    <div className={cx(styles.workCard, className)}>
      <Paragraph color="grey">{number}</Paragraph>
      <Paragraph size="L">{title}</Paragraph>
    </div>
  );
};

export default WorkCard;
