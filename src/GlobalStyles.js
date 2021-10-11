import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {

        /* Layout sizes  */
        --layout-mobile: 375px;
        --layout-desktop: 1440px;

        /* Fonts  */
        --ff-primary: 'Space Mono', monospace;
        --fs-form-inputs: 24px;
        --fw-regular: 400;
        --fw-bold: 700;

        /* Colors  */
        --color-strong-cyan: hsl(172, 67%, 45%);
        --color-very-dark-cyan: hsl(183, 100%, 15%);
        --color-dark-grayish-cyan: hsl(186, 14%, 43%);
        --color-dark-grayish-cyan2: hsl(184, 14%, 56%);
        --color-light-grayish-cyan: hsl(185, 41%, 84%);
        --color-light-grayish-cyan2: hsl(189, 41%, 97%);
        --color-white: hsl(0, 0%, 100%);

        /* Shapes  */
        --radius-corner: 25px;
        --radius-corner-small: 5px;

        background: #292828;
    }

    body {
        @media (min-width: 776px) {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 95vh;
        }
    }

    #root {
        background: var(--color-light-grayish-cyan);
        min-width: var(--layout-mobile);
        margin: 0 auto;
        font-family: var(--ff-primary);
        border: 1px solid grey;
        width: 376px;

        @media (min-width: 776px) {
            /* background: orange; */
            width: 900px;
            max-width: 1440px;
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

`;

export default GlobalStyles;