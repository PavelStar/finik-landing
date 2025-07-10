import { Section, Paragraph } from "../../components/index";
import styles from "./Privacy.module.scss";
// import { privacyData } from "../../constants/privacy";
import type { FC } from "react";

interface IPrivacyProps {
  intro: string;
  list: Array<string>;
}

const Privacy: FC<IPrivacyProps> = ({ intro, list }) => {
  return (
    <Section className={styles.privacy} theme="transparent">
      <Paragraph>{intro}</Paragraph>
      <ul className={styles.privacyList}>
        {list.map((privacyItem) => {
          return (
            <li className={styles.privacyListItem} key={privacyItem}>
              <Paragraph tag="span" text={privacyItem} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Privacy;
