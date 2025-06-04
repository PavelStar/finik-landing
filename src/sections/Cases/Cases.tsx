import type { FC } from "react";
import { Section, Title } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Cases.module.scss";
import { CASES } from "../../constants/cases";

const cx = classNames.bind(styles);

interface ICases {
  id?: string;
}

const Cases: FC<ICases> = ({ id }) => {
  return (
    <Section className={cx(styles.cases)} id={id}>
      <ul className={cx(styles.list)}>
        {CASES.map((item) => {
          return (
            <li key={item.id} className={cx(styles.item)}>
              <Title className={cx(styles.title)} level={2} size="L">
                {item.title}
              </Title>
              <picture className={cx(styles.image)}>
                <source
                  srcSet={`${item.images.mobile} 1x, ${item.images.mobile2x} 2x`}
                  media="(max-width: 768px)"
                />
                <source
                  srcSet={`${item.images.tablet} 1x, ${item.images.tablet2x} 2x`}
                  media="(max-width: 1023px)"
                />
                <img
                  src={item.images.desktop}
                  srcSet={`${item.images.desktop2x} 2x`}
                  alt={item.alt}
                />
              </picture>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Cases;
