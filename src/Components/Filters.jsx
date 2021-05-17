import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const FiltersComponent = ({ handleClickFilter }) => {
  const {
    filters,
    setFilters,
    columnValue,
    setColumnValue } = useContext(StarWarsContext);

  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const { filterByName, filterByNumericValues } = filters;

  const getValueInput = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
    handleClickFilter(value);
  };

  const getValuesNumberInput = ({ target }) => {
    const { value, name } = target;
    setColumnValue({ ...columnValue, [name]: value });
  };

  const removeColumn = (column) => {
    console.log([column]);
    setColumns(columns.filter((item) => item !== column));
  };

  const renderFilters = () => (
    <>
      <label htmlFor="colums">
        Colunas:
        <select
          name="column"
          id="colums"
          data-testid="column-filter"
          onChange={ (e) => getValuesNumberInput(e) }
        >
          { columns.map((col) => (
            <option key={ col } value={ col }>{ col }</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparação
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => getValuesNumberInput(e) }
        >
          <option value=""> </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          id="value-filter"
          data-testid="value-filter"
          placeholder="Digite um numero"
          onChange={ (e) => getValuesNumberInput(e) }
        />
      </label>
    </>
  );

  return (
    <form>
      <label htmlFor="ask">
        Planeta:
        <input
          type="text"
          name="ask"
          id="ask"
          data-testid="name-filter"
          placeholder="Digite o planeta"
          onChange={ (e) => { getValueInput(e); } }
        />
      </label>
      {renderFilters() }
      <button
        onClick={ () => {
          const { name } = filterByName;
          const { column } = columnValue;
          handleClickFilter(name);
          removeColumn(column);
        } }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
};

FiltersComponent.propTypes = {
  handleClickFilter: PropTypes.func,
}.isRequired;

export default FiltersComponent;
