import type { FC } from "react";
import { Section, Title, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Cases.module.scss";
import { CASES } from "../../constants/cases";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface ICases {
  id?: string;
}

const Cases: FC<ICases> = ({ id }) => {
  return (
    <Section className={cx(styles.cases)} theme="dark" fullWidth id={id}>
      <ul className={cx(styles.list)}>
        {CASES.map((item) => {
          return (
            <li key={item.id} className={cx(styles.item)}>
              <Link to={`/cases/${item.id}`} className={styles.link}>
                <Title
                  className={cx(styles.title)}
                  level={2}
                  size="L"
                  weight="medium"
                >
                  {item.title}
                </Title>
                <Picture {...item.image} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Cases;
