import { Intro } from "../../sections/index";
import styles from "./CasesPage.module.scss";
import { CaseCard, Section } from "../../components/index";
import { useEffect, useState } from "react";
import type { ICasesPage } from "../../types/types";
import { Link } from "react-router-dom";
import { URL_PREFIX } from "../../constants/url";

const CasesPage = () => {
  const [data, setData] = useState<ICasesPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/casesPage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  console.log("casesPage ", data.intro);

  return (
    <div className={styles.casesPage}>
      <Intro {...data.intro} />
      <Section className={styles.section} theme="transparent">
        <ul className={styles.list}>
          {data.list.map((item) => {
            return (
              <li className={styles.cardWrap} key={item.id}>
                <Link className={styles.articleCard} to={String(item.id) || ""}>
                  <CaseCard {...item} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default CasesPage;
