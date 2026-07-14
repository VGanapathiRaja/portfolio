import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    cursor: none;
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: #00c6ff #0a0e1a;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0e1a;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: linear-gradient(180deg, #00c6ff, #ff3fb4, #b84dff);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ff3fb4, #00c6ff);
  }
`;

export default GlobalStyle;