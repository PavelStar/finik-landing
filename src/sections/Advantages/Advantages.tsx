import type { FC } from "react";
import { Section, SectionGrid, Title, Paragraph } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Advantages.module.scss";
import { advantages } from "../../constants/advantages";

const cx = classNames.bind(styles);

interface IAdvantages {
  id?: string;
}

const Advantages: FC<IAdvantages> = ({ id }) => {
  return (
    <Section className={cx(styles.advantages)} id={id}>
      <SectionGrid
        className={cx(styles.grid)}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Почему мы?"
        titleColor="darkGrey"
      >
        <ul className={styles.inner}>
          {advantages.map((card) => {
            return (
              <li key={card.id} className={styles.cardWrap}>
                <Title
                  className={styles.title}
                  color="light"
                  size="L"
                  weight="medium"
                >
                  {card.title}
                </Title>
                <Paragraph className={styles.sescription} color="light">
                  {card.description}
                </Paragraph>
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default Advantages;
