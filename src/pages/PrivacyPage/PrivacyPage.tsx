import { Intro, Privacy } from "../../sections/index";
import styles from "./PrivacyPage.module.scss";

const PrivacyPage = () => {
  return (
    <>
      <Intro className={styles.intro} title="политика конфиденциальности" />
      <Privacy />
    </>
  );
};

export default PrivacyPage;
