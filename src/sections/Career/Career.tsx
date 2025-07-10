import { useState, type FC } from "react";
import {
  Accordion,
  Paragraph,
  Link,
  Title,
  Section,
  SectionGrid,
  Button,
  // Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Career.module.scss";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ArrowIcon from "../../assets/arrow-icon.svg?react";
import type { ICareer } from "../../types/types";

const cx = classNames.bind(styles);

interface ICareerProps {
  itemsType?: "accordion" | "link";
}

const Career: FC<ICareerProps & ICareer> = ({
  id,
  itemsType = "accordion",
  title,
  list,
  outro,
}) => {
  const { pathname } = useLocation();
  const [openItems, setOpenItems] = useState<Array<string>>([]);

  return (
    <Section className={cx(styles.career)} theme="dark" id={id}>
      <SectionGrid titleWrapClassName={styles.titleWrap} title={title}>
        <ul className={cx(styles.items)}>
          {list.map((career) => {
            if (itemsType === "link") {
              return (
                <li key={career.id}>
                  <RouterLink
                    to={
                      pathname.includes("career")
                        ? `${career.id}`
                        : `career/${career.id}`
                    }
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
                    {career.content.description && (
                      <div className={styles.descriptionWrap}>
                        <Title
                          className={styles.descriptionTitle}
                          weight="bold"
                        >
                          {career.content.description.title}
                        </Title>
                        <Paragraph className={styles.descriptionText}>
                          {career.content.description.text}
                        </Paragraph>
                      </div>
                    )}
                    <ul className={styles.listsWrap}>
                      {career.content.lists.map((item) => {
                        return (
                          <li key={item.title}>
                            <Title weight="bold">{item.title}</Title>
                            <ul className={styles.itemList}>
                              {item.items.map((item) => {
                                return (
                                  <li
                                    key={item}
                                    className={styles.itemListItem}
                                  >
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
                        {career.content.outro}{" "}
                        <Link textDecoration="underline">
                          hello@finik-lab.ru
                        </Link>
                      </Paragraph>
                    )}
                  </div>
                </Accordion>
              </li>
            );
          })}
        </ul>

        {outro && (
          <div className={cx(styles.contacts)}>
            <Paragraph
              className={cx(styles.contactsTitle)}
              size="L"
              weight="medium"
            >
              {outro.title}
            </Paragraph>
            <Paragraph>
              {outro.title}{" "}
              <Link textDecoration="underline">{outro.description.link}</Link>
            </Paragraph>
            {outro.button && (
              <RouterLink to={outro.button.href || ""}>
                <Button className={styles.outroButton}>
                  {outro.button.text}
                </Button>
              </RouterLink>
            )}
          </div>
        )}
      </SectionGrid>
    </Section>
  );
};

export default Career;
