import {
  Intro,
  Cases,
  Partners,
  Services,
  About,
  HowWeWork,
  Contacts,
  Career,
  Articles,
  Gallery,
} from "../../sections/index";
import { ANCHORS } from "../../constants/anchors";
import { type FC } from "react";
import styles from "./HomePage.module.scss";
import { workCards } from "../../constants/howWeWork";

interface IHomePage {
  onModalOpen: () => void;
}

const HomePage: FC<IHomePage> = ({ onModalOpen }) => {
  return (
    <>
      <Intro
        title="Инновации, которые трансформируют бизнес"
        buttonText="обсудить проект"
        onClick={onModalOpen}
      />
      <Cases id={ANCHORS.cases} />
      <Partners />
      <div className={styles.wrapper}>
        <Services id={ANCHORS.services} />
      </div>
      <About id={ANCHORS.about} />
      <Gallery id={ANCHORS.gallery} />
      <HowWeWork
        id={ANCHORS.howWeWork}
        title="Как мы работаем"
        list={workCards}
      />
      <div className={styles.wrapper}>
        <Contacts id={ANCHORS.contacts} onClick={onModalOpen} />
      </div>
      <Articles id={ANCHORS.articles} />
      <Career id={ANCHORS.career} />
    </>
  );
};

export default HomePage;
