import type { FC } from "react";
import { Section, SectionGrid, NumberCard } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./HowWeWork.module.scss";
import type { IWorkCard } from "../../components/NumberCard/NumberCard";

const cx = classNames.bind(styles);

interface IHowWeWork {
  id?: string;
  title: string;
  list: Array<IWorkCard>;
}

const HowWeWork: FC<IHowWeWork> = ({ id, title, list }) => {
  return (
    <Section className={cx(styles.howWeWork)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
        titleColor="darkGrey"
      >
        <ul className={styles.inner}>
          {list.map((card) => {
            return (
              <li key={card.id} className={styles.cardWrap}>
                <NumberCard number={card.number} title={card.title} />
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default HowWeWork;
