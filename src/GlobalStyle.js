import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Molengo&display=swap');
  p, ul {
    font-family: 'Molengo', sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 1.5;
    font-size: 15px;
  }

  h1 {
    font-family: 'Molengo', sans-serif;
    font-weight: normal;
    margin-left: 200px;
    font-size: 20px;
  }

  main {
    display: flex;
    background-color: #f5f5f5;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .about {
    display: flex;
    background-color: #f5f5f5;
    justify-content: center;
    flex-direction: column;
    align-items: left;
  }

  html {
    background-color: #f5f5f5;
  }

  #placeholder {
    margin-top: 50px;
    width: 450px;
  }

  .source-code {
    font-family: 'Molengo', sans-serif;
    margin-left: 200px;
    margin-right: 200px;
    line-height: 1.5;
    font-size: 15px;
  }

  footer {
    font-family: 'Molengo', sans-serif;
    font-size: 17px;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
  }

`