import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledPurchaseCard = styled(Card)`
  min-width: 200px;
  background-color: var(-- ${props => props.color});
  color: #fff;
`;

const Label = styled.span`
  display: block;
`;

const Total = styled.h2`
  margin-bottom: 0;
`;

const PurchaseCard = ({ period, people, total, ...rest }) => {
  return (
    <StyledPurchaseCard {...rest}>
      <Label>{period}</Label>
      <Card.Title>{people} people</Card.Title>
      <Total>{total}</Total>
      <Label>Purchases Total</Label>
    </StyledPurchaseCard>
  );
};

export default PurchaseCard;
