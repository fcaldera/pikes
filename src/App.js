import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import OverviewCard from './components/OverviewCard';
import PurchaseCard from './components/PurchaseCard';

const PageHeader = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2.5;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Scrollable = styled.div`
  /* display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; */
  margin: -4rem -2rem;
  padding: 4rem 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader>15 December 2017</PageHeader>
        </header>
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
      </div>
    );
  }
}

export default App;
