import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --c-primary: #756AB6;
        --c-primary-2: #AC87C5;
        --c-primary-3: #E0AED0;
        --c-primary-4: #FFE5E5;
        
        --c-primary-hv: #5e5691;

        --c-white: #FDF4F5;
        --c-black: #282828
    }
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
    -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
        @media (max-width: 56.25em) { font-size: 50%; } ;
        @media (max-width: 75em) {font-size: 56.25%  } ;
        @media (min-width: 112.5em) {font-size: 68%;  } ;
    }
`;

export default GlobalStyles;
