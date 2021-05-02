import React from 'react';
import { Header, Table } from './Components';
import PlanetsProvider from './Context/PlanetsProvider';
import './CSS';

function App() {
  return (
    <PlanetsProvider>
      <div className="align-text">
        <Header />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
