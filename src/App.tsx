import {
  Header,
  Intro,
  Cases,
  Footer,
  Partners,
  About,
  HowWeWork,
  Contacts,
  Articles,
} from "./sections/index";
import styles from "./App.module.scss";
import Services from "./sections/Services/Services";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Intro />
      <Cases />
      <Partners />
      <div className={styles.wrapper}>
        <Services />
      </div>
      <About />
      <HowWeWork />
      <div className={styles.wrapper}>
        <Contacts />
      </div>
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
