import type { FC } from "react";
import { Section, Title, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Cases.module.scss";
import type { ICases } from "../../types/types";

const cx = classNames.bind(styles);

interface ICasesProps {
  className?: string;
}

const Cases: FC<ICases & ICasesProps> = ({ id, list, className }) => {
  console.log(list);

  return (
    <Section
      className={cx(styles.cases, className)}
      theme="transparent"
      id={id}
    >
      <ul className={cx(styles.list)}>
        {list.map((item) => {
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
