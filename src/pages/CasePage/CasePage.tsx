import { type FC } from "react";
import { Section, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./CasePage.module.scss";
import {
  Intro,
  Contacts,
  MainInfo,
  Details,
  Steps,
  Results,
} from "../../sections/index";
import { useParams } from "react-router-dom";
import { casesData } from "../../constants/cases";

const cx = classNames.bind(styles);

interface ICasePage {
  id?: string;
  onModalOpen: () => void;
}

const CasePage: FC<ICasePage> = ({ id, onModalOpen }) => {
  const params = useParams();
  const caseId = params.caseId;

  const currentCase = casesData.find((item) => item.id === Number(caseId));

  if (!currentCase) {
    return null;
  }

  return (
    <>
      <div className={cx(styles.casePage)} id={id}>
        <Intro
          title={currentCase.casePageData.intro.title}
          description={currentCase.casePageData.intro.description}
        />
        <Section theme="dark">
          <Picture {...currentCase.casePageData.image} />
        </Section>
        <MainInfo
          title="Основная информация"
          list={currentCase.casePageData.mainInfo.list}
        />
        <Details list={currentCase.casePageData.details.list} />
        <Results />
        <Steps
          title="Результаты и метрики"
          list={currentCase.casePageData.metrics.list}
        />
      </div>
      <Contacts onClick={onModalOpen} />
    </>
  );
};

export default CasePage;
