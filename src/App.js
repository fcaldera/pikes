import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const PageHeader = styled.h1`
  border-bottom: 1px solid #eaeff1;
  line-height: 2;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader>15 December 2017</PageHeader>
        </header>
      </div>
    );
  }
}

export default App;
