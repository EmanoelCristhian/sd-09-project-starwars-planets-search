import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const FiltersComponent = ({ handleClickFilter }) => {
  const {
    setFilterName,
    setFilterColumn,
    setFilterComparison,
    setFilterNumber } = useContext(StarWarsContext);

  const getValueInput = ({ target }) => {
    const { value } = target;
    setFilterName(value);
  };

  const getValueNumberInput = ({ target }) => {
    const { value } = target;
    setFilterNumber(value);
  };

  const getValueColumn = ({ target }) => {
    const { value } = target;
    setFilterColumn(value);
  };

  const getValueComparison = ({ target }) => {
    const { value } = target;
    setFilterComparison(value);
  };

  const renderFilters = () => (
    <>
      <label htmlFor="colums">
        Colunas:
        <select
          id="colums"
          data-testid="column-filter"
          onChange={ (e) => getValueColumn(e) }
        >
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
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => getValueComparison(e) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          placeholder="Digite um numero"
          onChange={ (e) => getValueNumberInput(e) }
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
        onClick={ () => handleClickFilter() }
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
