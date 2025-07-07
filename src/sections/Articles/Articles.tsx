import type { FC } from "react";
import { Section, SectionGrid, ArticleCard } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Articles.module.scss";
// import { articlesData } from "../../constants/articles";
import type { IArticleCard } from "../../components/ArticleCard/ArticleCard";
// import type { IPicture } from "../../types/types";
// import { resolveImagePaths } from "../../utils/resolveImagePaths";

const cx = classNames.bind(styles);

interface IArticles {
  sectionId?: string;
  sectionTitle: string;
  // id?: string;
  list: Array<IArticleCard>;
}

const Articles: FC<IArticles> = ({ sectionId, sectionTitle, list }) => {
  return (
    <Section className={cx(styles.articles)} theme="dark" id={sectionId}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        // title="Мы в СМИ"
        title={sectionTitle}
      >
        <ul className={cx(styles.list)}>
          {/* {articlesData.map((article) => { */}
          {list.map((article) => {
            return (
              <li className={styles.cardWrap} key={article.id}>
                <ArticleCard
                  className={cx(styles.card)}
                  title={article.title}
                  date={article.date}
                  href={article.href}
                  // image={article.image}
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
