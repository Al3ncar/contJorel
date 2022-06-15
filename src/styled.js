import Back from "./img/back1.webp"
import Back2 from "./img/back.webp"
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body{
    width:100%;
    height:100vh;
    background-image:url(${Back});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    @media(max-width:500px){
      background-image:url(${Back2});
    }
  }
`;
 
export default GlobalStyle;