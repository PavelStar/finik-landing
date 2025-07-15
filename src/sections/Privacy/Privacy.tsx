import type { FC } from "react";
import { Section, Title, Paragraph } from "../../components/index";
import styles from "./Privacy.module.scss";
import type { IPrivacyItem } from "../../types/types";

interface PrivacyProps {
  list: Array<IPrivacyItem>;
}

const Privacy: FC<PrivacyProps> = ({ list }) => {
  return (
    <Section className={styles.privacy}>
      <ul className={styles.privacyList}>
        {list.map((privacyItem) => {
          return (
            <li className={styles.privacyListItem} key={privacyItem.id}>
              <Title level={3} size="L" weight="medium">
                {privacyItem.title}
              </Title>
              <ul>
                {privacyItem.list.map((listItem, index) => {
                  if (typeof listItem === "string") {
                    return (
                      <li key={index}>
                        <Paragraph tag="span">{listItem}</Paragraph>
                      </li>
                    );
                  }

                  return (
                    <li key={index}>
                      <ul>
                        {listItem.list?.map((item, index) => {
                          return (
                            <li key={index}>
                              <Paragraph tag="span">{item}</Paragraph>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Privacy;
