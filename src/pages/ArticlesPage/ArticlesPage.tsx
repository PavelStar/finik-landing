import { Intro } from "../../sections/index";
import styles from "./ArticlesPage.module.scss";
import { ArticleCard, Section } from "../../components/index";
import { useEffect, useState } from "react";
import type { IArticlesPage } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const ArticlesPage = () => {
  const [data, setData] = useState<IArticlesPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/articlesPage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <div className={styles.articlesPage}>
      <Intro className={styles.intro} {...data.intro} />
      <Section className={styles.section} theme="transparent">
        <ul className={styles.list}>
          {data.list.map((article) => {
            return (
              <li className={styles.cardWrap} key={article.id}>
                <ArticleCard
                  className={styles.card}
                  title={article.title}
                  date={article.date}
                  href={article.href}
                  image={article.image}
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
