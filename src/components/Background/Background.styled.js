import styled from 'styled-components';

export const BackgroundBox = styled.div`
  margin: 0 auto;
  height: 70vh;
  max-width: 90vw;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  color: grey;
  margin-bottom: 24px;
`;
