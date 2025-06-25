import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import styles from "./Accordion.module.scss";
import classNames from "classnames/bind";
import { Title } from "../index";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import AccordionButton from "./AccordionButton/AccordionButton";

const cx = classNames.bind(styles);

interface IAccordion {
  id: number | string;
  title: string;
  image?: string;
  children: ReactNode;
  openItems: Array<string>;
  theme?: "light" | "dark";
  setOpenItems: Dispatch<SetStateAction<string[]>>;
}

const Accordion: FC<IAccordion> = ({
  id,
  title,
  children,
  image,
  openItems,
  theme = "light",
  setOpenItems,
}) => {
  return (
    <Root
      type="multiple"
      className={cx(styles.accordion, theme)}
      value={openItems}
      onValueChange={setOpenItems}
    >
      <div className={cx(styles.itemWrapper)} key={id}>
        {image && (
          <img className={cx(styles.imageWrapper)} src={image} alt="" />
        )}
        <Item key={id} value={title} className={styles.item}>
          <Header className={styles.header}>
            <Trigger className={styles.trigger}>
              <Title className={styles.triggerTitle} size="L" level={3}>
                {title}
              </Title>
              <AccordionButton
                className={styles.triggerButton}
                isOpen={openItems.includes(title)}
              />
            </Trigger>
          </Header>

          <Content className={styles.content}>{children}</Content>
        </Item>
      </div>
    </Root>
  );
};

export default Accordion;
