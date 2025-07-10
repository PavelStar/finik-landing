import type { FC } from "react";
import {
  Section,
  SectionGrid,
  ArticleCard,
  Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Articles.module.scss";
import type { IArticles } from "../../types/types";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Articles: FC<IArticles> = ({ id, title, list, button }) => {
  return (
    <Section className={cx(styles.articles)} theme="dark" id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
      >
        <ul className={cx(styles.list)}>
          {list.map((article) => {
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
        {button && (
          <Link className={styles.link} to={button.href || ""}>
            <Button>{button.text}</Button>
          </Link>
        )}
      </SectionGrid>
    </Section>
  );
};

export default Articles;
