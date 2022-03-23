import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from './page/MainPage/MainPage';
import { ProductsPage } from './page/ProductsPage/ProductsPage';
import { ProductPage } from './page/ProductPage/ProductPage';

import './app.scss';
import { useEffect } from 'react';
import Spinner from './components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import Error from './components/Error/Error';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { isLoading, isError } = useSelector((state) => state.data);
  return (
    <div className="app" data-test-id="app">
      <Header />

      <Routes>
        <Route exact path="/" element={!isLoading ? <MainPage /> : <Spinner />} />
        <Route
          exact
          path="/women"
          element={
            isError ? <Error /> : !isLoading ? <ProductsPage productType="women" /> : <Spinner />
          }
        />
        <Route
          exact
          path="/men"
          element={
            isError ? <Error /> : !isLoading ? <ProductsPage productType="men" /> : <Spinner />
          }
        />
        <Route
          path="/women/:id"
          element={
            isError ? <Error /> : !isLoading ? <ProductPage productType="women" /> : <Spinner />
          }
        />
        <Route
          path="/men/:id"
          element={
            isError ? <Error /> : !isLoading ? <ProductPage productType="men" /> : <Spinner />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
