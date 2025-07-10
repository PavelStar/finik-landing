import type { FC } from "react";
import {
  Section,
  SectionGrid,
  Title,
  Paragraph,
  Picture,
  Container,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Examples.module.scss";
import Marquee from "react-fast-marquee";
import type { IExamples } from "../../types/types";
// import { slides } from "../../constants/services";

const cx = classNames.bind(styles);

interface IExamplesProps {
  id?: string;
}

const Examples: FC<IExamplesProps & IExamples> = ({ id, title, content }) => {
  return (
    <Section className={cx(styles.examples)} fullWidth theme="dark" id={id}>
      <Container>
        <SectionGrid
          className={cx(styles.grid)}
          contentClassName={styles.content}
          titleWrapClassName={styles.titleWrap}
          title={title}
        >
          <div className={styles.textInner}>
            <Title level={2} size="L" text={content.title} />
            <Paragraph text={content.description} />
          </div>
        </SectionGrid>
      </Container>
      <Marquee
        className={cx(styles.marquee)}
        gradient={false}
        speed={100}
        pauseOnHover={false}
        autoFill={true}
      >
        <ul className={cx(styles.list)}>
          {content.slides.map((slide) => {
            return (
              <li key={slide.id}>
                <Picture {...slide.image} />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default Examples;
