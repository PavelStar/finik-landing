import type { FC } from "react";
import styles from "./ArticleCard.module.scss";
import classNames from "classnames/bind";
import { Paragraph, Picture } from "../../components/index";
import type { IPictureItem } from "../../constants/cases";

const cx = classNames.bind(styles);

export interface IArticleCard {
  id?: number;
  href: string;
  pictureItem: IPictureItem;
  date: string;
  title: string;
  className?: string;
}

const ArticleCard: FC<IArticleCard> = ({
  href,
  pictureItem,
  date,
  title,
  className,
}) => {
  return (
    <a className={cx(styles.articleCard, className)} href={href}>
      <Picture {...pictureItem} />
      <div className={styles.textWrap}>
        <Paragraph className={styles.date} color="light">
          {date}
        </Paragraph>
        <Paragraph className={styles.title} size="L" weight="medium">
          {title}
        </Paragraph>
      </div>
    </a>
  );
};

export default ArticleCard;
