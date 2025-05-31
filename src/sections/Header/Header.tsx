import { useState } from "react";
import { Section, Menu, MobileMenu, Logo } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "../../constants/breakpoints";

const cx = classNames.bind(styles);

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });

  const handleClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  const headerBackground = isMenuShown ? styles.white : styles.transparent;
  const logoColor = isMenuShown ? "dark" : "light";

  return (
    <header className={cx(styles.header, headerBackground)}>
      <Section className={styles.inner} tag="div">
        <Logo color={logoColor} />
        {!isTablet ? (
          <Menu />
        ) : (
          <MobileMenu onButtonClick={handleClick} isMenuShown={isMenuShown} />
        )}
      </Section>
    </header>
  );
};

export default Header;
