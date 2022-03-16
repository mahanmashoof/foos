import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Queen of Camelot';
  src: url('fonts/QueenOfCamelot.woff2') format('woff2'),
       url('fonts/QueenOfCamelot.woff') format('woff');
}
`;

export default FontStyles;