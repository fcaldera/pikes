import styled, { css } from 'styled-components';

export const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

const active = css`
  color: #fff;

  &::before {
    content: '';
    background-color: #000;
    border-radius: 50%;
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    z-index: -1;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props => props.active && active}
`;
