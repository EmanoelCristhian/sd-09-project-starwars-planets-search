import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import FiltersComponent from './Filters';

const Table = () => {
  const {
    data,
    fetchPlanetsStarWars,
    filters,
  } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanetsStarWars();
  }, []);

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

  const filtersByName = () => {
    const { filterByName: { name } } = filters;
    return data.filter((planet) => planet.name.match(name) && planet.name);
  };

  const filtersByBiggerThen = () => {
    const { column = 0, value } = filters.filterByNumericValues[0];
    return data.filter((planet) => Number(planet[column]) > value);
  };

  const filtersByLessThen = () => {
    const { column, value } = filters.filterByNumericValues[0];
    return data.filter((planet) => Number(planet[column]) < value);
  };

  const filtersByIqualTo = () => {
    const { column = 0, value } = filters.filterByNumericValues[0];
    return data.filter((planet) => planet[column] === value);
  };

  console.log(filtersByIqualTo());

  const handleClickFilter = () => {
    const { comparison } = filters.filterByNumericValues[0];
    if (comparison === 'igual a') return filtersByIqualTo();
    if (comparison === 'menor que') return filtersByLessThen();
    if (comparison === 'maior que') return filtersByBiggerThen();
  };

  const renderWithFilters = () => {
    if (filters.filterByName.name) return renderBody(filtersByName());
    return handleClickFilter()
      ? renderBody(handleClickFilter())
      : renderBody(data);
  };

  return (
    <>
      <FiltersComponent />
      <table>
        <tbody>
          { renderHeader() }
          {/* { renderBody(filtersByName()) } */ }
          { renderWithFilters() }
        </tbody>
      </table>
    </>
  );
};

export default Table;
