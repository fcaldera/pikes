import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2.5;
  margin-bottom: 3rem;
`;

const Header = ({ children, ...rest }) => {
  return (
    <header {...rest}>
      <Title>{children}</Title>
    </header>
  );
};

export default Header;
