import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./sections/index";
import { HomePage, Privacy, Articles } from "./pages/index";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/finik-landing">
        <Header />

        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
