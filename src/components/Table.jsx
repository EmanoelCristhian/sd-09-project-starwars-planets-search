import React, { useContext } from 'react';
import { MyContext } from '../context/Planets';

function Table() {
  const { planets, filters } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { planets.filter((planet) => planet.name.includes(name))
            .map((data) => (
              <tr key={ data.name }>
                <td>{ data.name }</td>
                <td>{ data.rotation_period }</td>
                <td>{ data.orbital_period }</td>
                <td>{ data.diameter }</td>
                <td>{ data.climate }</td>
                <td>{ data.gravity }</td>
                <td>{ data.terrain }</td>
                <td>{ data.surface_water }</td>
                <td>{ data.population }</td>
                <td>{ data.films }</td>
                <td>{ data.created }</td>
                <td>{ data.edited }</td>
                <td>{ data.url }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
