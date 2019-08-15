import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }  
`;

export default GlobalStyle;