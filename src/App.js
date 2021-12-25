import React, { useState } from 'react';
import styles from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhotoInfo from 'components/PhotoInfo';
import Searchbar from 'components/Searchbar';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  // const onSubmit = inputValue => {
  //   setSearchValue(inputValue);
  // };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={setSearchValue} />
      <PhotoInfo value={searchValue} />
      <ToastContainer />
    </div>
  );
}
