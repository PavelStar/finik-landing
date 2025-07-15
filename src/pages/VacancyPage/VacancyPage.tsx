import { useEffect, useState, type FC } from "react";
import {
  Section,
  Title,
  Paragraph,
  SectionGrid,
  Link,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./VacancyPage.module.scss";
import { Intro } from "../../sections/index";
import { useParams } from "react-router-dom";
import type { IVacancyPage } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const cx = classNames.bind(styles);

interface IVacancyPageProps {
  id?: string;
}

const VacancyPage: FC<IVacancyPageProps> = ({ id }) => {
  const params = useParams();
  const jobId = params.jobId;

  const [data, setData] = useState<IVacancyPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/vacancyPage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  const vacancy = data.list.find((item) => item.id === Number(jobId));

  if (!vacancy) {
    return null;
  }

  return (
    <Section
      className={cx(styles.vacancyPage)}
      theme="transparent"
      id={id}
      fullWidth
      tag="div"
    >
      <Intro className={styles.intro} title={vacancy?.title || ""} />
      <Section className={cx(styles.content)} theme="transparent">
        <SectionGrid title={data.title} titleWrapClassName={styles.gridTitle}>
          {vacancy && (
            <div className={styles.contentWrap}>
              <div className={styles.descriptionWrap}>
                <Title className={styles.descriptionTitle} size="L">
                  {vacancy.content.description.title}
                </Title>
                <Paragraph className={styles.descriptionText}>
                  {vacancy.content.description.text}
                </Paragraph>
              </div>
              <ul className={styles.listsWrap}>
                {vacancy.content.lists.map((item) => {
                  return (
                    <li key={item.title}>
                      <Title className={styles.itemTitle} size="L">
                        {item.title}
                      </Title>
                      <ul className={styles.itemList}>
                        {item.items.map((item) => {
                          return (
                            <li key={item} className={styles.itemListItem}>
                              <Paragraph>{item}</Paragraph>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>

              {vacancy.content.outro && (
                <Paragraph>
                  {vacancy.content.outro.text}{" "}
                  <Link
                    href={`mailto:${vacancy.content.outro.link}`}
                    textDecoration="underline"
                  >
                    {vacancy.content.outro.link}
                  </Link>
                </Paragraph>
              )}
            </div>
          )}
        </SectionGrid>
      </Section>
    </Section>
  );
};

export default VacancyPage;
