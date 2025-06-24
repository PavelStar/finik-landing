import type { FC } from "react";
import { Section, SectionGrid, Title, Paragraph } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Details.module.scss";

const cx = classNames.bind(styles);

interface IDetails {
  id?: string;
  list: Array<{
    id: number | string;
    title: string;
    description?: string;
    list?: Array<string>;
  }>;
}

const Details: FC<IDetails> = ({ id, list }) => {
  return (
    <Section className={cx(styles.details)} id={id}>
      <SectionGrid
        className={cx(styles.grid)}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Детали проекта"
        theme="dark"
      >
        <ul className={styles.inner}>
          {list.map((card) => {
            return (
              <li key={card.id} className={styles.cardWrap}>
                <Title
                  className={styles.title}
                  color="dark"
                  size="L"
                  weight="medium"
                >
                  {card.title}
                </Title>
                {card.description && (
                  <Paragraph className={styles.description} color="dark">
                    {card.description}
                  </Paragraph>
                )}
                {card.list && (
                  <ul>
                    {card.list.map((item) => {
                      return (
                        <li key={item} className={styles.listItem}>
                          <Paragraph color="dark">{item}</Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default Details;
