import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

export default function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  const rowHead = () => (
    <tr>
      {Object.keys(data.results[0]).map((title) => <th key={ title }>{title}</th>)}
    </tr>
  );
  const rowBody = () => (
    data.results
      .map((element) => (
        <tr key={ element.name }>
          { Object.values(element).map((value) => <td key={ value }>{ value }</td>) }
        </tr>
      )));

  // Source of the rowHead and rowBody functions: https://github.com/tryber/sd-09-project-starwars-planets-search/pull/52/files /

  if (!data.results) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <table>
        <thead>
          { rowHead() }
        </thead>
        <tbody>
          { rowBody() }
        </tbody>
      </table>
    </div>
  );
}
