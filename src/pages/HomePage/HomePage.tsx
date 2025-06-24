import {
  Intro,
  Cases,
  Partners,
  Services,
  About,
  Steps,
  Contacts,
  Career,
  Articles,
} from "../../sections/index";
import { ANCHORS } from "../../constants/anchors";
import { type FC } from "react";
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
      <Services id={ANCHORS.services} />
      <About id={ANCHORS.about} />
      {/* <Gallery id={ANCHORS.gallery} /> */}
      <Steps id={ANCHORS.howWeWork} title="Как мы работаем" list={workCards} />
      <Contacts id={ANCHORS.contacts} onClick={onModalOpen} />
      <Articles id={ANCHORS.articles} />
      <Career id={ANCHORS.career} />
    </>
  );
};

export default HomePage;
