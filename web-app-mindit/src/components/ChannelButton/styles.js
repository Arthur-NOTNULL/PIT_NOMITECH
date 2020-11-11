import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }

    > div .arrow-icon {
        display: unset;
    }
  }
`;

export const ArrowIcon = styled(FiArrowRight)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  transition: color 0.2s;

  display: none;
`;