import { Section, Logo, Link, Paragraph } from "../../components/index";
import styles from "./Footer.module.scss";
import { Link as RouterLink } from "react-router-dom";

// const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <Section className={styles.footer} theme="dark" tag="footer">
      <div className={styles.inner}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <div className={styles.linksWrap}>
          <Paragraph>
            {"Входит в "}
            <Link
              href="https://digitalleague.ru/"
              textDecoration="underline"
              target="_blank"
            >
              Лигу Цифровой Экономики
            </Link>
          </Paragraph>
          {/* <RouterLink to="privacy">
            <Paragraph
              className={styles.privacyLink}
              textDecoration="underline"
              tag="span"
            >
              Политика конфиденциальности
            </Paragraph>
          </RouterLink> */}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
