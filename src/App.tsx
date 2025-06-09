import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./sections/index";
import {
  HomePage,
  PrivacyPage,
  ArticlesPage,
  CareerPage,
  VacancyPage,
} from "./pages/index";
import styles from "./App.module.scss";
import { ScrollToTop } from "./components/index";

function App() {
  console.log("finik version 1.0.0");

  return (
    <div className={styles.app}>
      <BrowserRouter basename="/finik-landing">
        <ScrollToTop />
        <Header />

        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:jobId" element={<VacancyPage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
