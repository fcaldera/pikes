import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import OverviewCard from './components/OverviewCard';

const PageHeader = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2.5;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
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
            <OverviewCard label="active buyers" value="101" />
            <OverviewCard label="inactive" value="48" />
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
