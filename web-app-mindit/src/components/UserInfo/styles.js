import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;

    padding: 0 17px;

    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
    cursor: pointer;
`;

export const I = styled(FiChevronDown)`
    margin-left: 9px;

    font-size: 16px;

    color: var(--white);
    cursor: pointer;
`;

