import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const FiltersComponent = () => {
  const { setFilters } = useContext(StarWarsContext);

  const getvalueInput = ({ target }) => {
    const { value } = target;
    setFilters(value);
  };

  return (
    <form>
      <label htmlFor="ask">
        Buscar planeta:
        <input
          type="text"
          name="ask"
          id="ask"
          data-testid="name-filter"
          placeholder="Digite o planeta"
          onChange={ (e) => getvalueInput(e) }
        />
      </label>
    </form>
  );
};

export default FiltersComponent;
