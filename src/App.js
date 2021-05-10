import React from 'react';
import './App.css';
import Table from './Components/Table';
import StarWarsProvider from './Context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <header><h1>Star Wars Planets</h1></header>
      <main>
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
