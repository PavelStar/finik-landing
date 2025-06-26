import type { FC } from "react";
import styles from "./ArticleCard.module.scss";
import classNames from "classnames/bind";
import { Paragraph, Picture } from "../../components/index";
import type { IPicture } from "../../types/types";

const cx = classNames.bind(styles);

export interface IArticleCard {
  id?: number;
  href: string;
  image: IPicture;
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
      <Picture {...image} />
      <div className={styles.textWrap}>
        <Paragraph className={styles.date} color="light">
          {date}
        </Paragraph>
        <Paragraph
          className={styles.title}
          size="L"
          weight="medium"
          text={title}
        />
      </div>
    </a>
  );
};

export default ArticleCard;
