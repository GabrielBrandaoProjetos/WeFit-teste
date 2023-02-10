import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #2F2E41;
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-style: normal;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`