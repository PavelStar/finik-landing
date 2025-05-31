import type { Dispatch, FC, SetStateAction } from "react";
import styles from "./Accordion.module.scss";
import classNames from "classnames/bind";
import { Paragraph, Title } from "../index";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "../../constants/breakpoints";
import type { IService } from "../../constants/services";
import AccordionButton from "./AccordionButton/AccordionButton";

const cx = classNames.bind(styles);

interface IAccordion {
  items: Array<IService>;
  openItems: Array<string>;
  setOpenItems: Dispatch<SetStateAction<string[]>>;
}

const Accordion: FC<IAccordion> = ({ items, openItems, setOpenItems }) => {
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });

  return (
    <Root
      type="multiple"
      className={styles.root}
      value={openItems}
      onValueChange={setOpenItems}
    >
      <ul className={cx(styles.items)}>
        {items.map((service) => {
          const isImageShown = !isTablet && openItems.includes(service.title);

          return (
            <div className={cx(styles.itemWrapper)} key={service.id}>
              {/* <div className={cx(styles.imageWrapper)}>
              </div> */}
              {isImageShown && (
                <img
                  className={cx(styles.imageWrapper)}
                  src={service.image}
                  alt=""
                />
              )}
              <Item
                key={service.id}
                value={service.title}
                className={styles.item}
              >
                <Header className={styles.header}>
                  <Trigger className={styles.trigger}>
                    <Title size="L" color="dark" level={3}>
                      {service.title}
                    </Title>
                    <AccordionButton
                      isOpen={openItems.includes(service.title)}
                    />
                  </Trigger>
                </Header>
                <Content className={styles.content}>
                  <ul>
                    {service.content.map((item, index) => {
                      return (
                        <li key={index}>
                          <Paragraph color="dark">{item}</Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                </Content>
              </Item>
            </div>
          );
        })}
      </ul>
    </Root>
  );
};

export default Accordion;
