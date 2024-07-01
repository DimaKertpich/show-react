import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pageUrls } from "./pageUrls";
import Header from './shared/components/Header';
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import SubHeader from "./pages/MainPage/Components/SubHeader";

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <RecoilRoot>
          <Header />
          <SubHeader />
          <Routes>
            <Route path={pageUrls.login} element={<LoginPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
