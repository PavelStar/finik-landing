import { useState, type FC } from "react";
import {
  Accordion,
  Paragraph,
  Section,
  SectionGrid,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { services } from "../../constants/services";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "../../constants/breakpoints";

const cx = classNames.bind(styles);

interface IServices {
  id?: string;
}

const Services: FC<IServices> = ({ id }) => {
  const [openItems, setOpenItems] = useState<Array<string>>([]);
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });

  return (
    <Section className={cx(styles.services)} id={id}>
      <SectionGrid title="Услуги">
        <ul className={cx(styles.items)}>
          {services.map((service) => {
            const isImageShown = !isTablet && openItems.includes(service.title);

            return (
              <li key={service.id}>
                <Accordion
                  id={service.id}
                  title={service.title}
                  image={isImageShown ? service.image : undefined}
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                >
                  <ul>
                    {service.content.map((item) => {
                      return (
                        <li key={item}>
                          <Paragraph>{item}</Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default Services;
