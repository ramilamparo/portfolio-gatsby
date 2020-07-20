import { createGlobalStyle } from "styled-components";

export const CssBaseline = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        border: none;
    }

    html {
        /* 62.5% of the default browser font size(16px) = 10px */
        font-size: 62.5%;
        font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
        background-color: #252627;
    }

    /** Form elements does not inherit font-family by default. */
    input, select, textarea, button {
        font-family: inherit
    }

    body {
        box-sizing: border-box;
        color: white;
    }
`;
