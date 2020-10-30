import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    padding: 30px 30px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;

    max-width: 1196px;
    margin: 0 auto;
    height: 52px;

    .left,
    .right {
        display: flex;
        align-items: center;
        justify-content: center
    }

    .left{
        img {
            width: 150px;
            margin-right: 25px
        }
        span {
            color: var(--color-white-header-text);
            font-weight: 600;
            font-size: 1.125rem;
        }
    }

    .right{
        button {
            width: 153px;
            height: 53px;
            border-radius: 50px;
            border: none;
            background: var(--color-yellow);
            font-weight: 600;
            font-size: 1.125rem;
            cursor: pointer;
        }
    }
`;