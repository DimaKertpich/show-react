import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { pageUrls } from './pageUrls';
import Header from './shared/components/Header';
import LoginPage from './pages/LoginPage';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import DeliveryAndPaymentPage from './pages/DeliveryAndPaymentPage';
import DiscountProductsList from './pages/Discount';
import ForHimProductsList from './pages/ForHim';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './shared/components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box } from '@mui/material';
const queryClient = new QueryClient();

const App: FC = () => {
  const footerHeight = 41;

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <BrowserRouter>
          <RecoilRoot>
            <Box sx={{ minHeight: `calc(100vh - ${footerHeight}px)` }}>
              <Header />
              <Routes>
                <Route path={pageUrls.Discount} element={<DiscountProductsList />} />
                <Route path={pageUrls.main} element={<MainPage />} />
                <Route path={pageUrls.DeliveryAndPayment} element={<DeliveryAndPaymentPage />} />
                <Route path={pageUrls.login} element={<LoginPage />} />
                <Route path={pageUrls.AboutUs} element={<AboutUsPage />} />
                <Route path={`${pageUrls.ForHim}/:catagoryName`} element={<ForHimProductsList />} />
                <Route path="/" element={<Navigate to={pageUrls.main} />} />
              </Routes>
            </Box>
            <Footer />
          </RecoilRoot>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
