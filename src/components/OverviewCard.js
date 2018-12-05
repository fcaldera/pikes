import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledOverviewCard = styled(Card)`
  min-width: 200px;
`;

const Label = styled.span`
  text-transform: lowercase;
`;

const OverviewCard = ({ label, value }) => {
  return (
    <StyledOverviewCard>
      <Card.Title>{value}</Card.Title>
      <Label>{label}</Label>
    </StyledOverviewCard>
  );
};

export default OverviewCard;
