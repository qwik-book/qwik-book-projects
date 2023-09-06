import { styled } from 'styled-vanilla-extract/qwik';

// Objeto con propiedades en común
const contenBlockClass = `
    display: block;
    width: 100%;
    height: 100px;
`;

export const OrangeBox = styled.div`
  ${contenBlockClass}
  background: orange;
`;
export const GreenBox = styled.div`
  ${contenBlockClass}
  background: green;
`;

export const RedBox = styled.div`
  ${contenBlockClass}
  background: red;
`;
