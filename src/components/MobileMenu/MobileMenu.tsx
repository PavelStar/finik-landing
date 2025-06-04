import { type FC } from "react";
import styles from "./MobileMenu.module.scss";
import classNames from "classnames/bind";
import { Link, MobileMenuButton } from "..";
import { menuItems } from "../../constants/menuItems";
import { scrollToSection } from "../../utils/scroll";

const cx = classNames.bind(styles);

interface IMenu {
  isMenuShown: boolean;
  setIsMenuShown: (value: boolean) => void;
  className?: string;
  onButtonClick: () => void;
}

const MobileMenu: FC<IMenu> = ({
  isMenuShown,
  setIsMenuShown,
  className,
  onButtonClick,
}) => {
  const handleClick = (href: string) => {
    setIsMenuShown(false);
    scrollToSection(href);
    console.log(href);
  };

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
                  // href={item.href}
                  onClick={() => handleClick(item.href)}
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
