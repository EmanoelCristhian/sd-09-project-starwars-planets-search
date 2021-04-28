import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data } = useContext(TableContext);
  const { results } = data;
  const resultsKeys = results.map((res) => Object.keys(res));
  const resultsValues = results.map((res) => Object.values(res));

  function renderHeader() {
    return resultsKeys[0].map((each, i) => (
      <th key={ i }>{each.toUpperCase().replace('_', ' ')}</th>
    ));
  }

  function renderBody() {
    return resultsValues.map((value, i) => (
      <tr key={ i }>
        {
          value.map((currValue, index) => (
            <td key={ index }>{currValue}</td>
          ))
        }
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          { renderHeader() }
        </tr>
      </thead>
      <tbody>
        { renderBody() }
      </tbody>
    </table>
  );
}

export default Table;
