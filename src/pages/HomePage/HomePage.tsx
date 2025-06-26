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
import { scrollToSection } from "../../utils/scroll";

interface IHomePage {
  onModalOpen: () => void;
}

const HomePage: FC<IHomePage> = ({ onModalOpen }) => {
  return (
    <>
      <Intro
        title="Инновации, которые трансформируют бизнес"
        description="Создаем сайты, приложения, цифровые платформы"
        buttonText="оставить заявку"
        onClick={() => {
          setTimeout(() => {
            scrollToSection(`#${ANCHORS.contacts}`);
          }, 200);
        }}
      />
      <Cases id={ANCHORS.cases} />
      <Partners />
      <Services id={ANCHORS.services} />
      <About id={ANCHORS.about} />
      <Steps
        id={ANCHORS.howWeWork}
        title="Как<br/> мы работаем"
        list={workCards}
      />
      <Articles id={ANCHORS.articles} />
      <Contacts id={ANCHORS.contacts} onClick={onModalOpen} />
      <Career id={ANCHORS.career} />
    </>
  );
};

export default HomePage;
