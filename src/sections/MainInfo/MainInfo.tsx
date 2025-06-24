import type { FC } from "react";
import { Paragraph, Section, SectionGrid } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./MainInfo.module.scss";

const cx = classNames.bind(styles);

interface IMainInfo {
  id?: string;
  title: string;
  list: Array<{
    id: number | string;
    title: string;
    description: string;
  }>;
}

const MainInfo: FC<IMainInfo> = ({ id, title, list }) => {
  return (
    <Section className={styles.mainInfo} theme="dark" id={id}>
      <SectionGrid
        className={styles.grid}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
        theme="dark"
      >
        <div className={cx(styles.textWrap)}>
          <div className={cx(styles.textInner)}>
            <ul className={styles.list}>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <Paragraph weight="medium" color="light" tag="span">
                      {item.title}
                    </Paragraph>
                    <Paragraph color="light" tag="span">
                      {item.description}
                    </Paragraph>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SectionGrid>
    </Section>
  );
};

export default MainInfo;
