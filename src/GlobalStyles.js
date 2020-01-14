import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans Condensed', sans-serif;
        src: url(assets/fonts/OpenSansCondensed-Bold.ttf) format(truetype);
    }

    body {
        font-family: 'Open Sans Condensed', sans-serif;
    }
`;

export default GlobalStyle;
