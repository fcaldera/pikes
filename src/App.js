import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const PageHeader = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2.5;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Card = styled.div`
  padding: 2.25rem;
  border-radius: 10px;
  margin-right: 1.75rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const OverviewCard = styled(Card)`
  color: #333;
  width: 238px;
`;

const Scrollable = styled.div`
  display: flex;
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
            <OverviewCard>dfasdf</OverviewCard>
            <OverviewCard>dfasdf</OverviewCard>
          </Scrollable>
        </Section>
        <Section>
          <h3>Purchases</h3>
        </Section>
      </div>
    );
  }
}

export default App;
