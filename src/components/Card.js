import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem 2rem 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.07), 1px 10px 70px rgba(0, 0, 0, 0.05);
  display: inline-block;

  & + & {
    margin-left: 1.5rem;
  }
`;

Card.Title = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: bold;
`;

export default Card;
