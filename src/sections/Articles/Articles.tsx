import type { FC } from "react";
import { Section, SectionGrid, ArticleCard } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Articles.module.scss";
import { articles } from "../../constants/articles";

const cx = classNames.bind(styles);

interface IArticles {
  id?: string;
}

const Articles: FC<IArticles> = ({ id }) => {
  return (
    <Section className={cx(styles.articles)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="О нас"
        titleColor="grey"
      >
        <ul className={cx(styles.list)}>
          {articles.map((article) => {
            return (
              <li className={styles.cardWrap} key={article.id}>
                <ArticleCard
                  className={cx(styles.card)}
                  title={article.title}
                  date={article.date}
                  href={article.href}
                  image={article.image}
                />
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default Articles;
