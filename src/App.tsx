import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./sections/index";
import {
  HomePage,
  PrivacyPage,
  ArticlesPage,
  CareerPage,
  VacancyPage,
  CasePage,
  ServicePage,
} from "./pages/index";
import styles from "./App.module.scss";
import { Form, Modal, ScrollToTop } from "./components/index";
import { useState } from "react";

function App() {
  console.log("finik version 1.0.2");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter basename="/finik-landing">
        <ScrollToTop />
        <Header />
        <Modal
          className={styles.modal}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        >
          <Form />
        </Modal>

        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={<HomePage onModalOpen={handleModalOpen} />}
            />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career/:jobId" element={<VacancyPage />} />
            <Route
              path="/cases/:caseId"
              element={<CasePage onModalOpen={handleModalOpen} />}
            />
            <Route
              path="/services/:serviceId"
              element={<ServicePage onModalOpen={handleModalOpen} />}
            />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
