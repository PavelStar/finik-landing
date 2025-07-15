import { useEffect, useState, type FC } from "react";
import { Agreement, Intro } from "../../sections/index";
import styles from "./AgreementPage.module.scss";
import type { IAgreementPage } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

interface IAgreementPageProps {}

const AgreementPage: FC<IAgreementPageProps> = () => {
  const [data, setData] = useState<IAgreementPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/agreementPage/data.json`)
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
      <Agreement {...data.content} />
    </>
  );
};

export default AgreementPage;
