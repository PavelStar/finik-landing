import type { FC } from "react";
import {
  Button,
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

const Contacts: FC<IContacts> = ({ id, onClick }) => {
  return (
    <Section className={cx(styles.contacts)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Контакты"
        theme="light"
      >
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <Paragraph color="dark" size="L" weight="medium">
              Давайте сотрудничать!
            </Paragraph>
            <Paragraph color="dark">
              Заполните короткую анкету и расскажите о ваших задачах
            </Paragraph>
          </div>
          <Button className={styles.button} onClick={onClick}>
            обсудить проект
          </Button>

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
