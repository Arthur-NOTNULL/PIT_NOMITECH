import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    padding: 30px 30px;

    position: static;
    top: 0;
    right: 0;
    left: 0;

    display: none;

    @media (min-width: 420px) {
        display: block;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    max-width: 1196px;
    margin: 0 auto;
    height: 82px;

    .left,
    .right {
        display: flex;
        align-items: center;
        justify-content: center
    }

    .left{
        img {
            width: auto;
            height: 35px;
            margin-right: 25px;
            flex-shrink: 0;
        }
        a {
            color: var(--color-text-header);
            text-decoration: none;
            font-size: 1rem;
            font-weight: 600;
            transition: color .2s ease-out;
        }

        a:hover{
            color: var(--color-text-header-hover);
        }
    }

    .right{
        button {
            padding: 0.7rem 2rem;
            border-radius: 50px;
        
            background: var(--color-yellow);
            font-weight: 600;

            outline: none;
            border: none;

            cursor: pointer;
        }
    }
`;
