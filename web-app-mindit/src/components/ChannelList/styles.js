import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const Separator = styled.div`
    width: 64px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 8px;
    margin-bottom: 8px;
`;