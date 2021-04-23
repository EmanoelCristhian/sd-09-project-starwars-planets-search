import React, { useContext } from 'react';
import FilterInput from './FilterInput';
import Loading from './Loading';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    isLoading,
    data: { results },
    filters: { filterByName: { name } },
    filters: { filterByNumericValues: [{ value, column, comparison }] },
  } = useContext(StarWarsContext);

  function planetsTable() {
    let filteredResults = results;
    if (comparison === 'maior que') {
      filteredResults = results
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
    }
    if (comparison === 'menor que') {
      filteredResults = results
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
    }
    if (comparison === 'igual a') {
      filteredResults = results
        .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
    }
    return filteredResults
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
      .map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.terrain}</td>
          <td>{planet.population}</td>
          <td>{planet.climate}</td>
          <td>{planet.diameter}</td>
          <td>{planet.gravity}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.films}</td>
          <td>{planet.url}</td>
        </tr>
      ));
  }

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Star Wars Planets API</h1>
      <FilterInput />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Terrain</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Diameter</th>
            <th>Gravity</th>
            <th>Orbital period</th>
            <th>Rotation period</th>
            <th>Surface water</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Films</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { planetsTable() }
        </tbody>
      </table>

    </div>
  );
}

export default Table;
