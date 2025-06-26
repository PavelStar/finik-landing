import { type FC } from "react";
import {
  Paragraph,
  Picture,
  Title,
  Section,
  SectionGrid,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { services } from "../../constants/services";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

interface IServices {
  id?: string;
}

const Services: FC<IServices> = ({ id }) => {
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });

  return (
    <Section className={cx(styles.services)} id={id}>
      <SectionGrid titleWrapClassName={styles.sectionTitleWrap} title="Услуги">
        <ul className={cx(styles.items)}>
          {services.map((service) => {
            return (
              <li className={cx(styles.item)} key={service.id}>
                {!isTablet && <Picture {...service.image} />}
                <div className={cx(styles.textWrap)}>
                  <Title className={cx(styles.title)} size="L" level={3}>
                    {service.title}
                  </Title>
                  <ul className={cx(styles.textList)}>
                    {service.content.map((item) => {
                      return (
                        <li key={item}>
                          <Paragraph>{item}</Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default Services;
