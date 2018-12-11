import styled from 'styled-components';

const Scrollable = styled.div`
  margin: -4rem -2rem;
  padding: 4rem 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Scrollable;
