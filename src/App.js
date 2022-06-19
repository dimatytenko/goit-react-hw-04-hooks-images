import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBox } from './App.styled';
import PhotoInfo from 'components/PhotoInfo';
import Searchbar from 'components/Searchbar';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppBox>
      <Searchbar onSubmit={setSearchValue} />
      <PhotoInfo value={searchValue} />
      <ToastContainer />
    </AppBox>
  );
}
