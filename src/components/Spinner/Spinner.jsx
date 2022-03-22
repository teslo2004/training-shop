import React from 'react';
import preloader from './assets/preloader.gif';

function Spinner() {
  return (
    <div data-test-id="loader">
      <img src={preloader} alt="preloader" />
    </div>
  );
}

export default Spinner;
