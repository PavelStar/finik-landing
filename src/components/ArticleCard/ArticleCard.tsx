import type { FC } from "react";
import styles from "./ArticleCard.module.scss";
import classNames from "classnames/bind";
import Paragraph from "../Paragraph/Paragraph";

const cx = classNames.bind(styles);

export interface IArticleCard {
  id?: number;
  href: string;
  image: string;
  date: string;
  title: string;
  className?: string;
}

const ArticleCard: FC<IArticleCard> = ({
  href,
  image,
  date,
  title,
  className,
}) => {
  return (
    <a className={cx(styles.articleCard, className)} href={href}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.textWrap}>
        <Paragraph className={styles.date} color="light">
          {date}
        </Paragraph>
        <Paragraph className={styles.title} size="L">
          {title}
        </Paragraph>
      </div>
    </a>
  );
};

export default ArticleCard;
