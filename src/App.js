import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <Table />
  </Provider>
);

export default App;
