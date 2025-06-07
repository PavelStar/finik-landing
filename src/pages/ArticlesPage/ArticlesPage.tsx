import { Intro } from "../../sections/index";
import styles from "./ArticlesPage.module.scss";
import { ArticleCard, Section } from "../../components/index";
import { articlesData } from "../../constants/articles";

const ArticlesPage = () => {
  return (
    <div className={styles.articlesPage}>
      <Intro title="политика конфиденциальности" />
      <Section className={styles.section}>
        <ul className={styles.list}>
          {articlesData.map((article) => {
            return (
              <li className={styles.cardWrap} key={article.id}>
                <ArticleCard
                  className={styles.card}
                  title={article.title}
                  date={article.date}
                  href={article.href}
                  pictureItem={article.pictureItem}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default ArticlesPage;
