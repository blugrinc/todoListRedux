import { createGlobalStyle } from "styled-components";
import { device } from "../../utils/constants";

export const GlobalStyles = createGlobalStyle`
html {
    font-size:62.5%;
}

*{
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;     
}

body {        
    overflow: hidden;
    background: #3c87ff;
}
`;
