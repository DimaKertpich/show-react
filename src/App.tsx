import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { FC } from "react";
import { pageUrls } from "./pageUrls";
import LoginPage from "./pages/LoginPage";
import { RecoilRoot } from "recoil";
import Header from './shared/components/Header';

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path={pageUrls.login} element={<LoginPage />} />
          </Routes>
        </RecoilRoot>
        <Header />
        <Routes>
          <Route path={pageUrls.login} element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
