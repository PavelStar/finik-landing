import { Section } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Partners.module.scss";
import { partners } from "../../constants/partners";
import Marquee from "react-fast-marquee";

const cx = classNames.bind(styles);

const Partners = () => {
  return (
    <Section className={cx(styles.partners)} theme="dark" fullWidth>
      <Marquee
        className={cx(styles.marquee)}
        gradient={false}
        speed={100}
        pauseOnHover={false}
        autoFill={true}
      >
        <ul className={cx(styles.list)}>
          {partners.map((partner, index) => {
            return (
              <li key={index}>
                <partner.icon className={cx(styles.logo)} />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default Partners;
