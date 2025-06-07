import type { FC } from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Paragraph } from "../../components";
import { menuItems } from "../../constants/menuItems";
import { scrollToSection } from "../../utils/scroll";
import { Link as RouterLink } from "react-router-dom";

const cx = classNames.bind(styles);

interface IMenu {
  className?: string;
}

const Menu: FC<IMenu> = ({ className }) => {
  const handleClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <ul className={cx(styles.menu, className)}>
      {menuItems.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <RouterLink
              className={styles.link}
              to={`/${item.href}`}
              onClick={() =>
                setTimeout(() => {
                  handleClick(item.href);
                }, 200)
              }
            >
              <Paragraph
                tag="span"
                size="S"
                textTransform="uppercase"
                weight="bold"
              >
                {item.text}
              </Paragraph>
            </RouterLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
