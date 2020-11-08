import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        background: var(--color-background);
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    *, button, input {
        font-family: 'Poppins', sans-serif;
    }
    
    :root{
        --color-background: #121214;
        --color-background-header: #121214;

        --color-text-header: rgba(255, 255, 255, 0.55);
        --color-text-header-hover: rgba(255, 255, 255, 0.7);

        --color-text-title: rgba(255, 255, 255, 1);
        --color-text-paragraph: rgba(255, 255, 255, 0.7);

        --color-text-button: #121214;
        --color-text-input: #999999;

        --color-yellow: #FDC134;
        --color-white: #fff;
        --color-black: #121214;
    }
`;