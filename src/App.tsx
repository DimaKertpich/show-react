import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { FC } from "react";
import { pageUrls } from "./pageUrls";
import LoginPage from "./pages/LoginPage";
import Header from './shared/components/Header';

const App: FC = () => {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={pageUrls.login} element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
