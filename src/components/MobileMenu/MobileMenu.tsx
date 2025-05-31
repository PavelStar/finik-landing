import { type FC } from "react";
import styles from "./MobileMenu.module.scss";
import classNames from "classnames/bind";
import { Link, MobileMenuButton } from "..";
import { menuItems } from "../../constants/menuItems";

const cx = classNames.bind(styles);

interface IMenu {
  isMenuShown: boolean;
  className?: string;
  onButtonClick: () => void;
}

const MobileMenu: FC<IMenu> = ({ isMenuShown, className, onButtonClick }) => {
  return (
    <>
      <MobileMenuButton onClick={onButtonClick} isMenuShown={isMenuShown} />
      {isMenuShown && (
        <ul className={cx(styles.mobileMenu, className)}>
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
      )}
    </>
  );
};

export default MobileMenu;
