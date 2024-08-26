import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { pageUrls } from './pageUrls';
import Header from './shared/components/Header';
import LoginPage from './pages/LoginPage';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import DeliveryAndPaymentPage from './pages/DeliveryAndPaymentPage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './shared/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <BrowserRouter>
          <RecoilRoot>
            <div style={{ height: '100vh', width: '100%' }}>
              <Header />
              <Routes>
                <Route path={pageUrls.main} element={<MainPage />} />
                <Route path={pageUrls.DeliveryAndPayment} element={<DeliveryAndPaymentPage />} />
                <Route path={pageUrls.login} element={<LoginPage />} />
                <Route path={pageUrls.AboutUs} element={<AboutUsPage />} />
                <Route path="/" element={<Navigate to={pageUrls.main} />} />
              </Routes>
              <Footer />
            </div>
          </RecoilRoot>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
