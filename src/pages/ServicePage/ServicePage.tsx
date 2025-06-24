import { type FC } from "react";
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
import { servicesData } from "../../constants/services";

const cx = classNames.bind(styles);

interface IServicePage {
  id?: string;
  onModalOpen: () => void;
}

const ServicePage: FC<IServicePage> = ({ id, onModalOpen }) => {
  const params = useParams();
  const serviceId = params.serviceId;

  const currentService = servicesData.find(
    (item) => item.id === Number(serviceId)
  );
  console.log(11, serviceId);

  if (!currentService) {
    return null;
  }

  return (
    <>
      <div className={cx(styles.casePage)} id={id}>
        <Intro
          title={currentService.servicePageData.intro.title}
          description={currentService.servicePageData.intro.description}
        />
        <Steps
          title="Результаты и метрики"
          list={currentService.servicePageData.choice.list}
        />
        <Examples />
        <Partners />
      </div>
      <div className={styles.wrapper}>
        <Contacts onClick={onModalOpen} />
      </div>
    </>
  );
};

export default ServicePage;
