import { useState } from "react";
import { Section, Menu, MobileMenu, Logo } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });
  useLockBodyScroll(isMenuShown);

  const handleClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  const headerBackground = isMenuShown ? styles.white : styles.transparent;
  const logoColor = isMenuShown ? "dark" : "light";

  return (
    <Section
      className={cx(styles.header, headerBackground)}
      fullWidth={isTablet ? true : false}
      tag="header"
    >
      <div className={styles.inner}>
        <Link to="/">
          <Logo color={logoColor} />
        </Link>
        {!isTablet ? (
          <Menu />
        ) : (
          <MobileMenu
            onButtonClick={handleClick}
            isMenuShown={isMenuShown}
            setIsMenuShown={setIsMenuShown}
          />
        )}
      </div>
    </Section>
  );
};

export default Header;
