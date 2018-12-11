import styled, { css } from 'styled-components';
import { MenuIcon } from './Icon';

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

// export const NavItem = styled.li`
//   color: #000;
//   line-height: 1;
//   width: 3rem;
//   height: 3rem;
//   padding: 0;
//   font-size: 1.5rem;
// `;

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

// export const RoundedNavItem = styled(NavItem)`
//   font-size: 1rem;
//   color: #fff;
//   background-color: #000;
//   border-radius: 50%;
// `;
