import { Section, Paragraph } from "../../components/index";
import styles from "./Agreement.module.scss";
import type { FC } from "react";

interface IAgreementProps {
  intro: string;
  list: Array<string>;
}

const Agreement: FC<IAgreementProps> = ({ intro, list }) => {
  return (
    <Section className={styles.agreement} theme="transparent">
      <Paragraph>{intro}</Paragraph>
      <ul className={styles.agreement}>
        {list.map((agreementItem) => {
          return (
            <li className={styles.agreementListItem} key={agreementItem}>
              <Paragraph tag="span" text={agreementItem} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Agreement;
