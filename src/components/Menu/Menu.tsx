import type { FC } from "react";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Link } from "../../components";
import { menuItems } from "../../constants/menuItems";

const cx = classNames.bind(styles);

interface IMenu {
  className?: string;
}

const Menu: FC<IMenu> = ({ className }) => {
  return (
    <ul className={cx(styles.menu, className)}>
      {menuItems.map((item) => {
        return (
          <li key={item.id}>
            <Link
              className={styles.link}
              size="S"
              text={item.text}
              href={item.href}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
