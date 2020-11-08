import styled from 'styled-components';
import { FiMenu, FiX} from 'react-icons/fi';

export const Container = styled.div`
    background: none;
    padding: 30px 30px;

    position: static;
    top: 0;
    left: 0;
    right: 0;

    max-width: 1196px;

    nav {
        position: static;
        top: 0;
        right: 0;
        bottom: 0;
        width: 300px;
    }

    .background {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 300px;
        background: #fff;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        z-index: 2;
    }

    ul {
        position: absolute;
        top: 100px;
        right: 0;
        width: 230px;
    }

    li {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .icon-placeholder {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex: 40px 0;
        margin-right: 20px;
    }

    .text-placeholder {
        border-radius: 5px;
        width: 200px;
        height: 20px;
        flex: 1;
    }

    .refresh {
        padding: 10px;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        width: 20px;
        height: 20px;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    @media (min-width: 420px) {
        display: none;
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

    img {
        width: auto;
        height: 35px;
        margin-right: 25px;
        flex-shrink: 0;
    }

    div.menu{
        z-index: 2;
    }
`;

export const MenuBars = styled(FiMenu)`
    width: 24px;
    height: 24px;
    color: var(--color-white);
`;
export const MenuClose = styled(FiX)`
    width: 24px;
    height: 24px;
    color: var(--color-black);
`;
export const Button = styled.button`
    padding: 0.7rem 2rem;
    border-radius: 50px;

    background: var(--color-yellow);
    font-weight: 600;

    outline: none;
    border: none;

    cursor: pointer;
`;