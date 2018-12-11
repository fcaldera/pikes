import React, { Component } from 'react';
import styled from 'styled-components';
import OverviewCard from './components/OverviewCard';
import PurchaseCard from './components/PurchaseCard';
import { MenuIcon } from './components/Icon';
import Scrollable from './components/Scrollable';
import { Navbar, Nav, NavLink } from './components/Navigation';
import Header from './components/Header';

const StyledApp = styled.div`
  padding: 3.5rem 2rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>15 December 2017</Header>
        <main>
          <Section>
            <h3>Overview</h3>
            <Scrollable>
              <OverviewCard label="active buyers" value="101" />
              <OverviewCard label="inactive" value="48" />
            </Scrollable>
          </Section>
          <Section>
            <h3>Purchases</h3>
            <Scrollable>
              <PurchaseCard
                period="Today"
                people="18"
                total="48"
                color="purple"
              />
              <PurchaseCard
                period="This week"
                people="58"
                total="312"
                color="deep-purple"
              />
              <PurchaseCard
                period="This month"
                people="320"
                total="882"
                color="pink"
              />
            </Scrollable>
          </Section>
        </main>
        <Navbar>
          <Nav>
            <NavLink>
              <MenuIcon vertical />
            </NavLink>
            <NavLink active>%</NavLink>
            <NavLink>
              <MenuIcon />
            </NavLink>
          </Nav>
        </Navbar>
      </StyledApp>
    );
  }
}

export default App;
