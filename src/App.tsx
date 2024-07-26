import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { pageUrls } from "./pageUrls";
import Header from './shared/components/Header';
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import SubHeader from "./pages/MainPage/Components/SubHeader";
import DeliveryAndPaymentPage from "./pages/DeliveryAndPaymentPage";

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <RecoilRoot>
          <Header />
          <Routes>
          <Route path={pageUrls.delivery} element={<DeliveryAndPaymentPage />} />
            <Route path={pageUrls.main} element={<SubHeader />} />
            <Route path={pageUrls.login} element={<LoginPage />} />
            
            <Route path="/" element={<Navigate to={pageUrls.delivery} />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
