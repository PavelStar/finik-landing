import { useEffect, useState, type FC } from "react";
import classNames from "classnames/bind";
import styles from "./ServicePage.module.scss";
import {
  Intro,
  Contacts,
  Steps,
  Examples,
  Partners,
} from "../../sections/index";
import { useParams } from "react-router-dom";
// import { servicesData } from "../../constants/services";
import type { IExamples, IIntro, IPartners, ISteps } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const cx = classNames.bind(styles);

interface IServicePage {
  id?: string;
  onModalOpen: () => void;
}

interface IServicePageData {
  list: Array<IServiceItem>;
}

interface IServiceItem {
  id: string;
  intro: IIntro;
  choice: ISteps;
  examples: IExamples;
  partners: IPartners;
}

const ServicePage: FC<IServicePage> = ({ id, onModalOpen }) => {
  const params = useParams();
  const serviceId = params.serviceId;

  const [data, setData] = useState<IServicePageData | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/servicePage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  console.log("data ", data.list[0]);

  // const currentService = servicesData.find((item) => item.id === serviceId);
  const currentService = data.list.find((item) => item.id === serviceId);

  if (!currentService) {
    return null;
  }

  return (
    <>
      <div className={cx(styles.casePage)} id={id}>
        <Intro
          title={currentService.intro.title}
          description={currentService.intro.description}
        />
        <Steps {...currentService.choice} />
        <Examples {...currentService.examples} />
        <Partners view="list" {...currentService.partners} />
      </div>
      <Contacts onClick={onModalOpen} />
    </>
  );
};

export default ServicePage;
