import type { FC } from "react";
import styles from "./NumberCard.module.scss";
import classNames from "classnames/bind";
import Paragraph from "../Paragraph/Paragraph";

const cx = classNames.bind(styles);

export interface INumberCard {
  id?: number;
  number: number | string;
  title: string;
  className?: string;
}

const WorkCard: FC<INumberCard> = ({ number, title, className }) => {
  return (
    <div className={cx(styles.numberCard, className)}>
      <Paragraph color="grey">{number}</Paragraph>
      <Paragraph size="L" weight="medium" text={title} />
    </div>
  );
};

export default WorkCard;
