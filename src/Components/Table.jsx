import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import FiltersComponent from './Filters';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const [planets, setPlanets] = useState([]);
  const [action, setAction] = useState(false);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  const renderHeader = () => (
    <tr>
      <th>Name</th>
      <th>Rotation Period</th>
      <th>Orbital Period</th>
      <th>diameter</th>
      <th>Climate</th>
      <th>Gravity</th>
      <th>Terrain</th>
      <th>Surface Water</th>
      <th>Population</th>
      <th>Films</th>
      <th>Created</th>
      <th>Edited</th>
      <th>URL</th>
    </tr>
  );

  const renderBody = (list) => (
    list.map((planet, index) => (
      <tr key={ index }>
        <td data-testid="planet-name">{ planet.name }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ planet.diameter }</td>
        <td>{ planet.climate }</td>
        <td>{ planet.gravity }</td>
        <td>{ planet.terrain }</td>
        <td>{ planet.surface_water }</td>
        <td>{ planet.population }</td>
        <td>{ planet.films }</td>
        <td>{ planet.created }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.url }</td>
      </tr>
    ))
  );

  const filterByName = (name) => {
    const listByName = data.filter((planet) => planet.name.match(name));
    return listByName;
  };

  const filtersByNumber = (listPlanets) => {
    const { value, column, comparison } = filters.filterByNumericValues[0];
    return listPlanets.filter((planet) => {
      if (comparison === 'igual a') return Number(planet[column]) === Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      return true;
    });
  };

  const handleClickFilter = (value) => {
    setPlanets(filtersByNumber(filterByName(value)));
  };

  return (
    <>
      <FiltersComponent
        handleClickFilter={ handleClickFilter }
      />
      <table>
        <tbody>
          { renderHeader() }
          { renderBody(planets) }
        </tbody>
      </table>
    </>
  );
};

export default Table;
