import { Section, Title, Paragraph } from "../../components/index";
import styles from "./Privacy.module.scss";
import { privacyData } from "../../constants/privacy";

const Privacy = () => {
  return (
    <Section className={styles.privacy} theme="transparent">
      <ul className={styles.privacyList}>
        {privacyData.map((privacyItem) => {
          return (
            <li className={styles.privacyListItem} key={privacyItem.id}>
              <Title level={3} size="L">
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
