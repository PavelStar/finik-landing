import { useEffect, useState, type FC } from "react";
import { Container, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./CasePage.module.scss";
import {
  Intro,
  // Contacts,
  MainInfo,
  Details,
  // Steps,
  Results,
} from "../../sections/index";
import { useParams } from "react-router-dom";
import type { ICasePage } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const cx = classNames.bind(styles);

interface ICasePageProps {
  id?: string;
  onModalOpen: () => void;
}

const CasePage: FC<ICasePageProps> = ({
  id,
  // onModalOpen
}) => {
  const params = useParams();
  const caseId = params.caseId;

  const [data, setData] = useState<ICasePage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/casePage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  const currentCase = data.list.find((item) => item.id === Number(caseId));

  if (!currentCase) {
    return null;
  }

  return (
    <>
      <div className={cx(styles.casePage)} id={id}>
        <Intro {...currentCase.intro} />
        <Container>
          <Picture {...currentCase.cover.image} />
        </Container>
        <MainInfo {...currentCase.mainInfo} />
        <Details {...currentCase.details} />
        <Results {...currentCase.results} />
        {/* <Steps
          title="Результаты и метрики"
          list={currentCase.casePageData.metrics.list}
        /> */}
      </div>
      {/* <Contacts onClick={onModalOpen} /> */}
    </>
  );
};

export default CasePage;
