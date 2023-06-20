import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size : 62.5%;
    background-color: #f5f6ff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
