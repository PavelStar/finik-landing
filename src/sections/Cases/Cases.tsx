import type { FC } from "react";
import { Section, Title, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Cases.module.scss";
import { CASES } from "../../constants/cases";

const cx = classNames.bind(styles);

interface ICases {
  id?: string;
}

const Cases: FC<ICases> = ({ id }) => {
  return (
    <Section className={cx(styles.cases)} theme="transparent" id={id}>
      <ul className={cx(styles.list)}>
        {CASES.map((item) => {
          return (
            <li key={item.id} className={cx(styles.item)}>
              <Title
                className={cx(styles.title)}
                level={2}
                size="L"
                weight="medium"
                text={item.title}
              />
              <Picture {...item.image} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Cases;
