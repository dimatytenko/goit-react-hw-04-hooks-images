import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import loop from '../../icons/loop.svg';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarLabel,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.info('enter a value to search for!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarButton icon={loop} type="submit">
          <SearchbarLabel>Search</SearchbarLabel>
        </SearchbarButton>

        <SearchbarInput
          type="text"
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
