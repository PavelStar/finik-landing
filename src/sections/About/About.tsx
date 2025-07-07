import type { FC } from "react";
import {
  Paragraph,
  Section,
  SectionGrid,
  Gallery,
  Container,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import type { IAbout } from "../../types/types";

const cx = classNames.bind(styles);

const About: FC<IAbout> = ({ id, list, slides }) => {
  return (
    <Section className={styles.about} theme="dark" fullWidth id={id}>
      <Container className={styles.container}>
        <SectionGrid
          className={styles.grid}
          contentClassName={styles.content}
          titleWrapClassName={styles.titleWrap}
          title="О нас"
        >
          <div className={cx(styles.textWrap)}>
            <div className={cx(styles.textInner)}>
              {list.map((item) => {
                return <Paragraph key={item} text={item} />;
              })}
            </div>
          </div>
        </SectionGrid>
      </Container>
      <Gallery slides={slides} />
    </Section>
  );
};

export default About;
