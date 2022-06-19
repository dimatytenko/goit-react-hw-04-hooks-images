import React from 'react';
import search from '../../image/search.jpg';
import { BackgroundBox, BackgroundTitle } from './Background.styled';

export default function Background() {
  return (
    <>
      <BackgroundTitle>Your request will be displayed here</BackgroundTitle>
      <BackgroundBox image={search}></BackgroundBox>
    </>
  );
}
