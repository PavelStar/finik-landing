import type { FC } from "react";
import {
  Section,
  SectionGrid,
  Paragraph,
  Contact,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";
import type { IContacts } from "../../types/types";

const cx = classNames.bind(styles);

interface IContactsProps {
  onClick: () => void;
}

const Contacts: FC<IContactsProps & IContacts> = ({ id, title, content }) => {
  return (
    <Section className={cx(styles.contacts)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
      >
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <Paragraph size="L" weight="medium">
              {content.title}
            </Paragraph>
            <Paragraph>{content.description}</Paragraph>
          </div>

          <div className={styles.contactsBlock}>
            {content.list.map((contact) => {
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
