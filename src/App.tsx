import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { pageUrls } from "./pageUrls";
import Header from './shared/components/Header';
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import SubHeader from "./pages/MainPage/Components/SubHeader";
import DeliveryAndPaymentPage from "./pages/DeliveryAndPaymentPage";
import Footer from "./shared/components/Footer";

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <RecoilRoot>
          <Header />
          <Routes>
            <Route path={pageUrls.main} element={<SubHeader />} />
            <Route path={pageUrls.delivery} element={<DeliveryAndPaymentPage />} />
            <Route path={pageUrls.login} element={<LoginPage />} />
            <Route path="/" element={<Navigate to={pageUrls.main} />} />
          </Routes>
          <Footer />
        </RecoilRoot>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
