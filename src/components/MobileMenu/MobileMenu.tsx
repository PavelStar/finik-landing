import { type FC } from "react";
import styles from "./MobileMenu.module.scss";
import classNames from "classnames/bind";
import { MobileMenuButton, Paragraph } from "../../components/index";
import { menuItems } from "../../constants/menuItems";
import { scrollToSection } from "../../utils/scroll";
import { Link as RouterLink } from "react-router-dom";

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
  };

  return (
    <>
      <MobileMenuButton
        className={styles.menuButton}
        onClick={onButtonClick}
        isMenuShown={isMenuShown}
      />
      {isMenuShown && (
        <ul className={cx(styles.mobileMenu, className)}>
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                {/* <RouterLink
                  className={styles.link}
                  size="S"
                  text={item.text}
                  textTransform="uppercase"
                  weight="bold"
                  onClick={() =>
                    setTimeout(() => {
                      handleClick(item.href);
                    }, 200)
                  }
                /> */}
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
                    size="S"
                    // text={item.text}
                    color="dark"
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
      )}
    </>
  );
};

export default MobileMenu;
