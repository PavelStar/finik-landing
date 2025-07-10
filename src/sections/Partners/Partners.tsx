import { Section, SectionGrid } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Partners.module.scss";
import Marquee from "react-fast-marquee";
import type { IPartners } from "../../types/types";
import {
  useEffect,
  useState,
  type FC,
  type FunctionComponent,
  type SVGProps,
} from "react";

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
                  <PartnerIcon iconName={partner.icon} />
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
                <PartnerIcon iconName={partner.icon} />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default Partners;

export const PartnerIcon = ({ iconName }: { iconName: string }) => {
  const [Icon, setIcon] = useState<FunctionComponent<
    SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    import(/* @vite-ignore */ `../../assets/partners/${iconName}?react`).then(
      (mod) => {
        if (mod) {
          setIcon(() => mod.default);
        }
      }
    );
  }, []);

  return <>{Icon && <Icon />}</>;
};
