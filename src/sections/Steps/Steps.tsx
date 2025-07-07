import type { FC } from "react";
import { Section, SectionGrid, NumberCard } from "../../components/index";
import styles from "./Steps.module.scss";
import type { ISteps } from "../../types/types";

const Steps: FC<ISteps> = ({ id, title, list }) => {
  return (
    <Section className={styles.steps} theme="dark" id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
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

export default Steps;
