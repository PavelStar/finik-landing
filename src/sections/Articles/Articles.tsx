import type { FC } from "react";
import {
  Section,
  SectionGrid,
  ArticleCard,
  Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Articles.module.scss";
import { articlesData } from "../../constants/articles";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface IArticles {
  id?: string;
}

const Articles: FC<IArticles> = ({ id }) => {
  return (
    <Section className={cx(styles.articles)} theme="dark" id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Мы в СМИ"
        theme="dark"
      >
        <ul className={cx(styles.list)}>
          {articlesData.map((article) => {
            return (
              <li className={styles.cardWrap} key={article.id}>
                <ArticleCard
                  className={cx(styles.card)}
                  title={article.title}
                  date={article.date}
                  href={article.href}
                  pictureItem={article.pictureItem}
                />
              </li>
            );
          })}
        </ul>
        <Link to="articles" className={cx(styles.link)}>
          <Button>все статьи</Button>
        </Link>
      </SectionGrid>
    </Section>
  );
};

export default Articles;
