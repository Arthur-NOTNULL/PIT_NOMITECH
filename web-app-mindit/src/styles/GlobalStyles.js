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
        border: 0;
        outline: 0;
        
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
        --color-gray: rgb(17, 17, 17);

        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
        
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
        --link: #5d80d6;
        --rocketseat: #6633cc;
    }
`;