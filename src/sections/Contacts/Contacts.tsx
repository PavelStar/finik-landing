import { useEffect, useState, type FC } from "react";
import {
  Section,
  SectionGrid,
  Paragraph,
  Contact,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";
import type { IContacts } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const cx = classNames.bind(styles);

interface IContactsProps {
  onClick: () => void;
}

const Contacts: FC<IContactsProps> = () => {
  const [data, setData] = useState<IContacts | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/contactsBlock/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <Section className={cx(styles.contacts)} id={data.id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={data.title}
      >
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <Paragraph size="L" weight="medium">
              {data.content.title}
            </Paragraph>
            <Paragraph>{data.content.description}</Paragraph>
          </div>

          <div className={styles.contactsBlock}>
            {data.content.list.map((contact) => {
              return (
                <Contact
                  key={contact.id}
                  type={contact.type}
                  text={contact.text}
                />
              );
            })}
          </div>
        </div>
      </SectionGrid>
    </Section>
  );
};

export default Contacts;
