import React from 'react';

import notFound from '../../image/notFound.jpg';
import {
  BackgroundBox,
  BackgroundTitle,
} from '../Background/Background.styled';

export default function NotFound({ error }) {
  return (
    <BackgroundBox image={notFound}>
      <BackgroundTitle>{error}</BackgroundTitle>
    </BackgroundBox>
  );
}
