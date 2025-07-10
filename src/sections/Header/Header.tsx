import { useEffect, useState } from "react";
import { Section, Menu, MobileMenu, Logo } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "../../constants/breakpoints";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: BREAKPOINTS.tablet });
  useLockBodyScroll(isMenuShown);
  const location = useLocation();

  const handleClick = () => {
    setIsMenuShown(!isMenuShown);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuFixed]);

  const headerBackground = isMenuShown ? styles.white : styles.transparent;
  const logoColor = isMenuShown ? "dark" : "light";

  const HIDDEN_PATHS = ["/privacy", "/articles"];

  const isMenuHidden = HIDDEN_PATHS.includes(location.pathname) ? true : false;

  return (
    <Section
      className={cx(
        styles.header,
        { [styles.fixed]: isMenuFixed, [styles.shown]: isMenuShown },
        headerBackground
      )}
      fullWidth={isTablet ? true : false}
      tag="header"
    >
      <div className={cx(styles.inner, { [styles.deleteBg]: isMenuShown })}>
        <Link to="/">
          <Logo color={logoColor} />
        </Link>
        {!isTablet && !isMenuHidden && <Menu />}

        {!isMenuHidden && isTablet && (
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
