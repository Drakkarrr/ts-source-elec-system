import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.2rem;
    margin: 3rem;
  }

  h1 {
    color: #005B1A;
    font-weight: bold;align-self: start;
  }
  h2 {
    color: #000000;
  }
  button {
    background-color: #005B1A;
    color: white;
  }
`;
 
export default GlobalStyle;