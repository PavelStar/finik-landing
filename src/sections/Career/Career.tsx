import { useState, type FC } from "react";
import {
  Accordion,
  Paragraph,
  Link,
  Title,
  Section,
  SectionGrid,
  // Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Career.module.scss";
import { careerItems } from "../../constants/career";
import { Link as RouterLink } from "react-router-dom";
import ArrowIcon from "../../assets/arrow-icon.svg?react";

const cx = classNames.bind(styles);

interface ICareer {
  id?: string;
  itemsType?: "accordion" | "link";
}

const Career: FC<ICareer> = ({ id, itemsType = "accordion" }) => {
  const [openItems, setOpenItems] = useState<Array<string>>([]);

  return (
    <Section className={cx(styles.career)} theme="dark" id={id}>
      <SectionGrid title="Карьера">
        <ul className={cx(styles.items)}>
          {careerItems.map((career) => {
            if (itemsType === "link") {
              return (
                <li key={career.id}>
                  <RouterLink
                    to={`${career.id}`}
                    className={cx(styles.itemLink)}
                  >
                    <Title size="L" color="light" level={3}>
                      {career.title}
                    </Title>
                    <div className={cx(styles.iconWrap)}>
                      <ArrowIcon className={styles.icon} />
                    </div>
                  </RouterLink>
                </li>
              );
            }

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
            Присылайте резюме на{" "}
            <Link textDecoration="underline">hello@finik-lab.ru</Link>
          </Paragraph>
        </div>
      </SectionGrid>
    </Section>
  );
};

export default Career;
