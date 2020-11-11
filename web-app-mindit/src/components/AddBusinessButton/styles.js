import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export const Container = styled.div`
    position: absolute;

    margin-left: 17px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;
    background:var(--primary);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: border-radius .2s, background-color .2s;

    &:hover,
    &.active {
        border-radius: 16px;
        background-color: var(--color-yellow);
    }
`;

export const AddIcon = styled(FiPlus)`
    width: 20px;
    height: 20px;

    color: var(--color-black);
`;
