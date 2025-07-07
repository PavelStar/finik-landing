import type { FC } from "react";
import { Section, Button, Title, Paragraph } from "../../components/index";
import styles from "./Intro.module.scss";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import type { IButton } from "../../types/types";
import { scrollToSection } from "../../utils/scroll";

const cx = classNames.bind(styles);

interface IIntroProps {
  title?: string;
  description?: string;
  button?: IButton;
  className?: string;
}

const Intro: FC<IIntroProps> = ({ title, description, button, className }) => {
  const location = useLocation();

  const routes = [
    { path: "/", breadcrumb: "Главная" },
    { path: "/privacy", breadcrumb: "Политика конфиденциальности" },
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  const isBreadcrumbsHidden = location.pathname === "/" ? true : false;

  const handleClick = () => {
    scrollToSection(`#${button?.scrollId}`);
  };

  return (
    <Section className={cx(styles.intro, className)} theme="transparent">
      {!isBreadcrumbsHidden && (
        <nav className={styles.breadcrumbs}>
          {breadcrumbs.map(({ breadcrumb, match }, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div className={styles.breadcrumbsItem} key={match.pathname}>
                {index > 0 && (
                  <Paragraph tag="span" size="S">
                    /
                  </Paragraph>
                )}
                {isLast ? (
                  <Paragraph tag="span" size="S">
                    {breadcrumb}
                  </Paragraph>
                ) : (
                  <Link to={match.pathname}>
                    <Paragraph tag="span" textDecoration="underline" size="S">
                      {breadcrumb}
                    </Paragraph>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      )}
      {title && (
        <Title
          className={styles.title}
          level={1}
          size="XL"
          weight="extraBold"
          textTransform="uppercase"
        >
          {title}
        </Title>
      )}
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
      {button && (
        <Button className={styles.button} onClick={handleClick}>
          {button.text}
        </Button>
      )}
    </Section>
  );
};

export default Intro;
