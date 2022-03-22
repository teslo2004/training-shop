import React from 'react';
import { useSelector } from 'react-redux';
import Benefits from '../../components/Benefits/Benefits';
import { Blog } from '../../components/Blog/Blog';
import Category from '../../components/Category/Category';
import Clothes from '../../components/Clothes/Clothes';
import Error from '../../components/Error/Error';
import { News } from '../../components/News/News';
import Subscribe from '../../components/Subscribe/Subscribe';
import './mainpage.scss';

export const MainPage = () => {
  const { isError } = useSelector((state) => state.data);
  return (
    <div>
      <div className="mainpage">
        {isError ? <Error /> : null}
        <Category />
        <Benefits />
        <Clothes productType="women" />
        <Clothes productType="men" />
        <News />
      </div>
      <Subscribe />
      <div className="mainpage">
        <Blog />
      </div>
    </div>
  );
};
