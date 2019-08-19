/**
 * @author Douglas Brandão
 * 
 * Componente de estilização global do app.
 */
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

  @media screen and (max-width: 800px) {
    html, body, #root {
      width: 100vw;
    }
  }
`;

export default GlobalStyle;
