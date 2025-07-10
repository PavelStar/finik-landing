import { Picture, Section, SectionGrid } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Partners.module.scss";
import Marquee from "react-fast-marquee";
import type { IPartners } from "../../types/types";
import { type FC } from "react";

const cx = classNames.bind(styles);

interface IPartnersProps {
  view?: "marquee" | "list";
}

const Partners: FC<IPartnersProps & IPartners> = ({
  view = "marquee",
  id,
  title,
  list,
}) => {
  if (view === "list") {
    return (
      <Section
        className={cx(styles.partners, styles.partnersTypeList)}
        id={id}
        theme="dark"
      >
        <SectionGrid
          contentClassName={styles.content}
          titleWrapClassName={styles.titleWrap}
          title={title}
        >
          <ul className={cx(styles.list, styles.listStatic)}>
            {list.map((partner, index) => {
              return (
                <li key={index} className={cx(styles.listItem)}>
                  <Picture className={styles.picture} {...partner.image} />
                </li>
              );
            })}
          </ul>
        </SectionGrid>
      </Section>
    );
  }

  return (
    <Section className={cx(styles.partners)} id={id} theme="dark" fullWidth>
      <Marquee
        className={cx(styles.marquee)}
        gradient={false}
        speed={100}
        pauseOnHover={false}
        autoFill={true}
      >
        <ul className={cx(styles.list)}>
          {list.map((partner, index) => {
            return (
              <li key={index}>
                <Picture className={styles.picture} {...partner.image} />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default Partners;
