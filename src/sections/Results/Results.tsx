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
import styles from "./Results.module.scss";
import Marquee from "react-fast-marquee";
// import { slides } from "../../constants/results";
import type { ISlide } from "../../types/types";
import React from "react";

const cx = classNames.bind(styles);

interface IResultsProps {
  id?: string;
  list: Array<{
    title: string;
    content: {
      title: string;
      description: string;
      slides: Array<ISlide>;
    };
  }>;
}

const Results: FC<IResultsProps> = ({ id, list }) => {
  return (
    <Section className={cx(styles.results)} theme="dark" fullWidth id={id}>
      {list.map((item) => {
        return (
          <React.Fragment key={item.title}>
            <Container>
              <SectionGrid
                className={cx(styles.grid)}
                contentClassName={styles.content}
                titleWrapClassName={styles.titleWrap}
                title={item.title}
              >
                <div className={styles.textInner}>
                  <Title level={2} size="L">
                    {item.content.title}
                  </Title>
                  <Paragraph>{item.content.description}</Paragraph>
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
                {item.content.slides.map((slide) => {
                  return (
                    <li key={slide.id}>
                      <Picture {...slide.image} />
                    </li>
                  );
                })}
              </ul>
            </Marquee>
          </React.Fragment>
        );
      })}
    </Section>
  );
};

export default Results;
