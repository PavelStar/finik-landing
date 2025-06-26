import type { FC } from "react";
import { Section, Button, Title, Paragraph } from "../../components/index";
import styles from "./Intro.module.scss";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

interface IIntro {
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Intro: FC<IIntro> = ({ title, description, buttonText, onClick }) => {
  const location = useLocation();

  const routes = [
    { path: "/", breadcrumb: "Главная" },
    { path: "/privacy", breadcrumb: "Политика конфиденциальности" },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  const isBreadcrumbsHidden = location.pathname === "/" ? true : false;

  return (
    <Section className={styles.intro} theme="transparent">
      {!isBreadcrumbsHidden && (
        <nav className={styles.breadcrumbs}>
          {breadcrumbs.map(({ breadcrumb, match }, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div className={styles.breadcrumbsItem} key={match.pathname}>
                {index > 0 && <Paragraph tag="span">/</Paragraph>}
                {isLast ? (
                  <Paragraph tag="span" textDecoration="underline">
                    {breadcrumb}
                  </Paragraph>
                ) : (
                  <Link to={match.pathname}>
                    <Paragraph tag="span" textDecoration="underline">
                      {breadcrumb}
                    </Paragraph>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      )}
      <Title
        className={styles.title}
        level={1}
        size="XL"
        weight="extraBold"
        textTransform="uppercase"
      >
        {title}
      </Title>
      {description && (
        <Paragraph
          className={styles.description}
          color="light"
          size="L"
          weight="medium"
        >
          {description}
        </Paragraph>
      )}
      {buttonText && (
        <Button className={styles.button} onClick={onClick}>
          Оставить заявку
        </Button>
      )}
    </Section>
  );
};

export default Intro;
