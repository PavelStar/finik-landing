import type { FC } from "react";
import {
  Section,
  SectionGrid,
  Paragraph,
  Contact,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";

const cx = classNames.bind(styles);

interface IContacts {
  id?: string;
  onClick: () => void;
}

const Contacts: FC<IContacts> = ({ id }) => {
  return (
    <Section className={cx(styles.contacts)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Контакты"
      >
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <Paragraph size="L" weight="medium">
              Давайте сотрудничать!
            </Paragraph>
            <Paragraph>Свяжитесь с нами любым удобным способом</Paragraph>
          </div>

          <div className={styles.contactsBlock}>
            <Contact type="mail">hello@finik-lab.ru</Contact>
            <Contact>+7 (495) 988-37-38</Contact>
          </div>
        </div>
      </SectionGrid>
    </Section>
  );
};

export default Contacts;
