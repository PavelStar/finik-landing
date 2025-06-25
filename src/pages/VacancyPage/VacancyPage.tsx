import { type FC } from "react";
import {
  Section,
  Title,
  Paragraph,
  SectionGrid,
  Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./VacancyPage.module.scss";
import { Intro } from "../../sections/index";
import { careerItems } from "../../constants/career";
import { useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

interface IVacancyPage {
  id?: string;
}

const VacancyPage: FC<IVacancyPage> = ({ id }) => {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params.jobId;

  const vacancy = careerItems.find((item) => item.id === Number(jobId));

  return (
    <Section className={cx(styles.vacancyPage)} id={id}>
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
                          <li className={styles.itemListItem}>
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
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад к вакансиям
        </Button>
      </SectionGrid>
    </Section>
  );
};

export default VacancyPage;
