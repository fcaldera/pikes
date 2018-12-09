import React, { Component } from 'react';
import styled from 'styled-components';
import OverviewCard from './components/OverviewCard';
import PurchaseCard from './components/PurchaseCard';
import Menu from './components/Menu';

const StyledApp = styled.div`
  padding: 3.5rem 2rem;
`;

const PageHeader = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2.5;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

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

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const NavItem = styled.button`
  color: #000;
  line-height: 1;
  width: 3rem;
  height: 3rem;
  padding: 0;
  font-size: 2rem;
`;

const RoundedNavItem = styled(NavItem)`
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <header className="App-header">
          <PageHeader>15 December 2017</PageHeader>
        </header>
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
            <NavItem>
              <Menu vertical />
            </NavItem>
            <RoundedNavItem>%</RoundedNavItem>
            <NavItem>
              <Menu />
            </NavItem>
          </Nav>
        </Navbar>
      </StyledApp>
    );
  }
}

export default App;
