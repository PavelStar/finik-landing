import { type FC } from "react";
import { Section, Picture } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./CasePage.module.scss";
import {
  Intro,
  Contacts,
  MainInfo,
  Details,
  HowWeWork,
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
        <Section>
          <Picture {...currentCase.casePageData.image} />
        </Section>
        <MainInfo
          title="Основная информация"
          list={currentCase.casePageData.mainInfo.list}
        />
        <div className={styles.wrapper}>
          <Details list={currentCase.casePageData.details.list} />
        </div>
        <Results />
        <HowWeWork
          title="Результаты и метрики"
          list={currentCase.casePageData.metrics.list}
        />
      </div>
      <div className={styles.wrapper}>
        <Contacts onClick={onModalOpen} />
      </div>
    </>
  );
};

export default CasePage;
