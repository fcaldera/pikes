import React from 'react';
import styled from 'styled-components';
import { NavLink } from './Navigation';

const Icon = styled.svg`
  ${NavLink} & {
    font-size: 1.3rem;
  }
`;

export const MenuIcon = ({ vertical, ...rest }) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    style={vertical && { transform: 'rotate(90deg)' }}
    {...rest}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      transform="rotate(45 50% 50%)"
    />
  </Icon>
);
