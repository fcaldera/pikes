import React from 'react';

const Menu = ({ vertical, ...rest }) => (
  <svg
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
  </svg>
);

export default Menu;
