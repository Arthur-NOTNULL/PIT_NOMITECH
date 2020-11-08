import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
`;

export const Wrapper = styled.div`
    max-width: 1196px;
    margin: 0 auto;

    .action-area{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: var(--color-text-title);
            font-size: 4.5rem;
            font-weight: 600;
            margin-bottom: 15px;

            strong{
                color: var(--color-yellow);
            }
        }

        p{
            color: var(--color-text-paragraph);
            font-size: 1.375rem;
            font-weight: 600;
            margin-bottom: 40px;
        }

        .btn-Entrar{
            text-decoration: none;
        }

        button{
            width: 206px;
            height: 55px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 2.8rem;

            border-radius: 50px;
            border: none;
            background: var(--color-yellow);
            
            font-size: 1.125rem;
            font-weight: 600;

            outline: none;
            cursor: pointer;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:hover div{
                translate: .5s;
                transform: translateX(11px);
            }
        }   
    }

    .image-area{
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            width:100%;
        }
    }
`;

