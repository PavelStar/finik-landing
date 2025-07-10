import type { FC } from "react";
import { Section, SectionGrid, Title, Paragraph } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Advantages.module.scss";
import type { IAdvantages } from "../../types/types";

const cx = classNames.bind(styles);

interface IAdvantagesProps {
  id?: string;
}

const Advantages: FC<IAdvantagesProps & IAdvantages> = ({
  id,
  title,
  list,
}) => {
  return (
    <Section className={cx(styles.advantages)} theme="transparent" id={id}>
      <SectionGrid
        className={cx(styles.grid)}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title={title}
      >
        <ul className={styles.inner}>
          {list.map((card) => {
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
