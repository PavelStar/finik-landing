import { useState, type FC } from "react";
import {
  Accordion,
  Paragraph,
  Link,
  Title,
  Section,
  SectionGrid,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Career.module.scss";
import { careerItems } from "../../constants/career";

const cx = classNames.bind(styles);

interface ICareer {
  id?: string;
}

const Career: FC<ICareer> = ({ id }) => {
  const [openItems, setOpenItems] = useState<Array<string>>([]);

  return (
    <Section className={cx(styles.career)} id={id}>
      <SectionGrid title="Карьера" titleColor="grey">
        <ul className={cx(styles.items)}>
          {careerItems.map((career) => {
            return (
              <li key={career.id}>
                <Accordion
                  theme="light"
                  id={career.id}
                  title={career.title}
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                >
                  <div className={styles.contentWrap}>
                    <div className={styles.descriptionWrap}>
                      <Title className={styles.descriptionTitle}>
                        {career.content.description.title}
                      </Title>
                      <Paragraph className={styles.descriptionText}>
                        {career.content.description.text}
                      </Paragraph>
                    </div>
                    <ul className={styles.listsWrap}>
                      {career.content.lists.map((item) => {
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
                    {career.content.outro && (
                      <Paragraph className={styles.itemOutro}>
                        {career.content.outro}
                      </Paragraph>
                    )}
                  </div>
                </Accordion>
              </li>
            );
          })}
        </ul>
        <div className={cx(styles.contacts)}>
          <Paragraph size="L" weight="medium">
            Хотите у нас работать?
          </Paragraph>
          <Paragraph>
            Присылайте резюме на <Link>hello@finik-lab.ru</Link>
          </Paragraph>
        </div>
      </SectionGrid>
    </Section>
  );
};

export default Career;
