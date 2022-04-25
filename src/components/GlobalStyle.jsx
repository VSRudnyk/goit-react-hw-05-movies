import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    
  }

  ul {
   
    margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  }

`;
