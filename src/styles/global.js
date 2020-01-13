import { createGlobalStyle } from 'styled-components'
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  text-decoration: none;
}
body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;

export default GlobalStyle;