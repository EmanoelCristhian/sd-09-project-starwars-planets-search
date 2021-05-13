import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const FiltersComponent = ({ handleClickFilter }) => {
  const {
    filters,
    setFilters,
    columnValue,
    setColumnValue } = useContext(StarWarsContext);

  const getValueInput = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const getValuesNumberInput = ({ target }) => {
    const { value, name } = target;
    setColumnValue({ ...columnValue, [name]: value });
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
          <option value=""> </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
          onChange={ (e) => getValueInput(e) }
        />
      </label>
      {renderFilters() }
      <button
        onClick={ () => {} }
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

/*
  const filtersByBiggerThen = () => {
    const { column, value } = FILTER.filters.filterByNumericValues[0];
    return data
      .filter((planet) => planet[column] > value);
  };

  const filtersByLessThen = () => {
    const { column, value } = FILTER.filters.filterByNumericValues[0];
    return data
      .filter((planet) => planet[column] < value);
  };

  const filtersByIqualTo = () => {
    const { column, value } = FILTER.filters.filterByNumericValues[0];
    return data.filter((planet) => Number(planet[column]) === value);
  };

  const handleClickFilter = () => {
    const { comparison } = FILTER.filters.filterByNumericValues[0];
    if (comparison === 'igual a') return filtersByIqualTo();
    if (comparison === 'menor que') return filtersByLessThen();
    if (comparison === 'maior que') return filtersByBiggerThen();
  };

  const renderWithFilters = () => {
    if (filterName) return renderBody(filtersByName());
    return handleClickFilter()
      ? renderBody(handleClickFilter())
      : renderBody(data);
  };
*/
