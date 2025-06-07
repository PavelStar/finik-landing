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
import { Form, Modal } from "../../components/index";
import { useState } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal className={styles.modal} isOpen={isOpen} onClose={handleClose}>
        <Form />
      </Modal>
      <Intro
        title="Инновации, которые трансформируют бизнес"
        buttonText="обсудить проект"
        onClick={handleOpen}
      />
      <Cases id={ANCHORS.cases} />
      <Partners />
      <div className={styles.wrapper}>
        <Services id={ANCHORS.services} />
      </div>
      <About id={ANCHORS.about} />
      <Gallery id={ANCHORS.gallery} />
      <HowWeWork id={ANCHORS.howWeWork} />
      <div className={styles.wrapper}>
        <Contacts id={ANCHORS.contacts} onClick={handleOpen} />
      </div>
      <Articles id={ANCHORS.articles} />
      <Career id={ANCHORS.career} />
    </>
  );
};

export default HomePage;
