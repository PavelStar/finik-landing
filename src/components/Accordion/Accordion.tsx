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
import AnimateHeight from "react-animate-height";

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
  console.log(openItems.includes(title));
  return (
    <Root
      type="multiple"
      className={cx(styles.accordion, theme)}
      value={openItems}
      onValueChange={setOpenItems}
    >
      <div className={cx(styles.itemWrapper)} key={id}>
        <AnimateHeight
          duration={300}
          height={openItems.includes(title) ? "auto" : 0}
        >
          {image && (
            <img className={cx(styles.imageWrapper)} src={image} alt="" />
          )}
        </AnimateHeight>
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
          <AnimateHeight
            duration={300}
            height={openItems.includes(title) ? "auto" : 0}
          >
            <Content className={styles.content}>{children}</Content>
          </AnimateHeight>
        </Item>
      </div>
    </Root>
  );
};

export default Accordion;
