import { Section, Logo, Link, Paragraph } from "../../components/index";
import styles from "./Footer.module.scss";
import { Link as RouterLink } from "react-router-dom";

// const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={styles.header}>
      <Section className={styles.inner} tag="div">
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <div className={styles.linksWrap}>
          <Paragraph>
            {"Входит в "}
            <Link href="https://digitalleague.ru/" textDecoration="underline">
              Лигу Цифровой Экономики
            </Link>
          </Paragraph>
          <RouterLink to="privacy">
            <Paragraph textDecoration="underline" tag="span">
              Политика конфиденциальности
            </Paragraph>
          </RouterLink>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
