import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import { FC } from "react";
import { pageUrls } from "./pageUrls";
import LoginPage from "./pages/LoginPage";

const App: FC = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path={pageUrls.login} element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
