import { useState } from "react";
import { Accordion, Section, SectionGrid } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { services } from "../../constants/services";

const cx = classNames.bind(styles);

const Services = () => {
  const [openItems, setOpenItems] = useState<Array<string>>([]);

  return (
    <Section className={cx(styles.services)}>
      <SectionGrid title="Услуги" titleColor="grey">
        <Accordion
          items={services}
          openItems={openItems}
          setOpenItems={setOpenItems}
        />
      </SectionGrid>
    </Section>
  );
};

export default Services;
