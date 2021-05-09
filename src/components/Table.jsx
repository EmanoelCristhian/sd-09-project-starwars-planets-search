import React from 'react';
import { useFilters, usePlanets } from '../context/Planets';

const generateTableHeader = (data) => {
  const headers = Object.keys(data)
    .filter((key) => key !== 'residents')
    .map((key, index) => {
      // Convert string to Pascal Case - https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript
      const treatedString = key.replace('_', ' ').replace(/(\w)(\w*)/g,
        (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
      return (<th key={ index }>{ treatedString }</th>);
    });
  return headers;
};

const generateTableContent = (data) => {
  const content = data.map((element, index) => {
    const td = Object.values(element)
      .filter((value) => typeof (value) !== 'object')
      .map((value, i) => (
        <td key={ i }>{value}</td>
      ));
    return (<tr key={ index }>{td}</tr>);
  });
  return content;
};

const handleDataFiltering = (data, filters) => {
  let filteredData = false;
  if (filters.filterByName.name) {
    filteredData = data.filter((element) => element
      .name.toLowerCase().includes(filters.filterByName.name.toLowerCase()));
  }
  if (filters.filterByNumericValues.length) {
    filteredData = filteredData || data;
    filteredData = filters.filterByNumericValues.map((filter) => (
      filteredData.filter((element) => {
        switch (filter.comparison) {
        case 'maior que':
          return Number(element[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(element[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(element[filter.column]) === Number(filter.value);
        default:
          return false;
        }
      })));
    if (filteredData.length > 1) {
      filteredData = filteredData[0]
        .filter((element) => filteredData[1].includes(element));
    } else {
      filteredData = [...filteredData[0]];
    }
  }
  return filteredData || data;
};

const Table = () => {
  const { data } = usePlanets();
  const { filters } = useFilters();
  const filteredData = handleDataFiltering(data, filters);
  const tableHeaders = data.length ? generateTableHeader(data[0]) : [];
  const tableContent = filteredData ? generateTableContent(filteredData) : [];
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        {tableContent}
      </tbody>
    </table>
  );
};

export default Table;
