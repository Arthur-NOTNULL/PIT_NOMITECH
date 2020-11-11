import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--background);
`;

export const WrapperContainer = styled.div`
    padding: 20px 20px;

    display: flex;
    flex-direction: column;

    max-height: calc(100vh - 46px);
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 10px;
    }
`;