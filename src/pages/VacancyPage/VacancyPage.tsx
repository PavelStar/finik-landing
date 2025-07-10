import { useEffect, useState, type FC } from "react";
import { Section, Title, Paragraph, SectionGrid } from "../../components/index";
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
    <Section className={cx(styles.vacancyPage)} theme="transparent" id={id}>
      <Intro title={vacancy?.title || ""} />
      <SectionGrid title="Карьера" titleWrapClassName={styles.gridTitle}>
        {vacancy && (
          <div className={styles.contentWrap}>
            <div className={styles.descriptionWrap}>
              <Title className={styles.descriptionTitle}>
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
                    <Title>{item.title}</Title>
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
              <Paragraph className={styles.itemOutro}>
                {vacancy.content.outro}
              </Paragraph>
            )}
          </div>
        )}
      </SectionGrid>
    </Section>
  );
};

export default VacancyPage;
