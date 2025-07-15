import { useEffect, useState, type FC } from "react";
import { Intro, Privacy } from "../../sections/index";
import styles from "./PrivacyPage.module.scss";
import type { IPrivacyPage } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

interface IPrivacyPageProps {}

const PrivacyPage: FC<IPrivacyPageProps> = () => {
  const [data, setData] = useState<IPrivacyPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/privacyPage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <>
      <Intro className={styles.intro} {...data.intro} />
      <Privacy list={data.list} />
    </>
  );
};

export default PrivacyPage;
