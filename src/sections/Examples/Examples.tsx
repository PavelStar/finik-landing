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
import { slides } from "../../constants/services";

const cx = classNames.bind(styles);

interface IExamples {
  id?: string;
}

const Examples: FC<IExamples> = ({ id }) => {
  return (
    <Section className={cx(styles.examples)} fullWidth theme="dark" id={id}>
      <Container>
        <SectionGrid
          className={cx(styles.grid)}
          contentClassName={styles.content}
          titleWrapClassName={styles.titleWrap}
          title="Экраны"
        >
          <div className={styles.textInner}>
            <Title level={2} size="L">
              Сфера – приложение для торговых представителей
            </Title>
            <Paragraph>
              Мы создали коммуникационные материалы для презентации приложения
              потенциальным заказчикам, а также разработали промоматериалы для
              выставок и мероприятий
            </Paragraph>
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
          {slides.map((slide) => {
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
