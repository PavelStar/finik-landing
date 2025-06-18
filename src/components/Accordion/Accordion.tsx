import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import styles from "./Accordion.module.scss";
import classNames from "classnames/bind";
import { Button, Title } from "../index";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import AccordionButton from "./AccordionButton/AccordionButton";
import { Link } from "react-router-dom";

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
              <Title size="L" color={theme} level={3} weight="medium">
                {title}
              </Title>
              <AccordionButton
                isOpen={openItems.includes(title)}
                theme={theme}
              />
            </Trigger>
          </Header>

          <Content className={styles.content}>
            {children}
            <Link to={`/services/${id}`} className={styles.link}>
              <Button>Подробнее</Button>
            </Link>
          </Content>
        </Item>
      </div>
    </Root>
  );
};

export default Accordion;
