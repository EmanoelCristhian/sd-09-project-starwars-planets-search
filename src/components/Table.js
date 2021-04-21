import React, { useContext } from 'react';
import { StarWarsContext } from '../context/index';

const Table = () => {
  const {
    allPlanets,
    loading,
    planetsWithFilter,
    handleChange,
  } = useContext(StarWarsContext);

  const renderTable = (planets) => (
    <table>
      <thead>
        <tr>
          <th>Nome do Planeta</th>
          <th>Período de rotação</th>
          <th>Período orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
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
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          id="name-filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      {(loading === false && planetsWithFilter.length === 0)
        ? renderTable(allPlanets)
        : renderTable(planetsWithFilter)}
    </div>
  );
};

export default Table;
