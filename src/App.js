import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from './page/MainPage/MainPage';
import { ProductsPage } from './page/ProductsPage/ProductsPage';
import { ProductPage } from './page/ProductPage/ProductPage';
import './app.scss';
import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="app" data-test-id="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/women" element={<ProductsPage productType="women" />} />
        <Route exact path="/men" element={<ProductsPage productType="men" />} />
        <Route path="/women/:id" element={<ProductPage productType="women" />} />
        <Route path="/men/:id" element={<ProductPage productType="men" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
