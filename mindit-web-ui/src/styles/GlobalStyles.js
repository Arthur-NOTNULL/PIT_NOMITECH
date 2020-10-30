import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    html, body, #root{
        background: var(--color-background);
    }

    *, button{
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --color-background: #121214;
        --color-yellow: #FDC134;
        --color-white-header-text: rgba(255, 255, 255, 0.55);
        --color-white-title: rgba(255, 255, 255, 1);
        --color-white-text: rgba(255, 255, 255, 0.7); 
    }
`;