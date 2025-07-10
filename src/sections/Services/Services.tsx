import { type FC } from "react";
import {
  Paragraph,
  Picture,
  Title,
  Section,
  SectionGrid,
  // Button,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
// import { services } from "../../constants/services";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { useMediaQuery } from "react-responsive";
import type { IServices } from "../../types/types";
// import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface IServicesProps {
  id?: string;
}

const Services: FC<IServicesProps & IServices> = ({ id, title, list }) => {
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });

  return (
    <Section className={cx(styles.services)} id={id}>
      <SectionGrid titleWrapClassName={styles.sectionTitleWrap} title={title}>
        <ul className={cx(styles.items)}>
          {list.map((service) => {
            return (
              <li className={cx(styles.item)} key={service.id}>
                {!isTablet && (
                  <Picture className={cx(styles.picture)} {...service.image} />
                )}
                <div className={cx(styles.textWrap)}>
                  <Title className={cx(styles.title)} size="L" level={3}>
                    {service.title}
                  </Title>
                  <ul className={cx(styles.textList)}>
                    {service.list.map((item) => {
                      return (
                        <li key={item} className={cx(styles.textItem)}>
                          <Paragraph>{item}</Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                  {/* {service.button && (
                    <Link to={`/${service.button.href}`}>
                      <Button className={styles.button}>
                        {service.button.text}
                      </Button>
                    </Link>
                  )} */}
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
