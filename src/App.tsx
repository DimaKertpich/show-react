import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { pageUrls } from "./pageUrls";
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path={pageUrls.login} element={<LoginPage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
