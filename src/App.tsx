import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { pageUrls } from './pageUrls';
import Header from './shared/components/Header';
import LoginPage from './pages/LoginPage';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import DeliveryAndPaymentPage from './pages/DeliveryAndPaymentPage';
import Footer from './shared/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <BrowserRouter>
          <RecoilRoot>
            <Header />
            <Routes>
              <Route path={pageUrls.main} element={<MainPage />} />
              <Route path={pageUrls.DeliveryAndPayment} element={<DeliveryAndPaymentPage />} />
              <Route path={pageUrls.login} element={<LoginPage />} />
              <Route path="/" element={<Navigate to={pageUrls.main} />} />
            </Routes>
            <Footer />
          </RecoilRoot>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
