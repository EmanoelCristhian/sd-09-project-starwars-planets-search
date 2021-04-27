import React, { useContext } from 'react';
import { SwPlanetsContext } from '../context/SWPlanetsContext';

function Form() {
  const {
    filters: { filterByName: { name } },
    filter: { value },
    columns,
    comparisons,
    handleNameChange,
    handleFilterClick,
    handleValueChange,
    handleRemoveClick,
  } = useContext(SwPlanetsContext);

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          name="name"
          value={ name }
          onChange={ handleNameChange }
          placeholder="Planet Name"
        />
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleValueChange }
        >
          { columns.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          )) }
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleValueChange }
        >
          { comparisons.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          )) }
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ value }
          onChange={ handleValueChange }
          placeholder="Value Filter"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleFilterClick }
        >
          Filter
        </button>
      </form>
      <div data-testid="filter">
        <button type="button" onClick={ handleRemoveClick }>X</button>
      </div>
    </div>
  );
}

export default Form;
