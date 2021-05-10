import { shape } from 'prop-types';
import React, { useState } from 'react';
import getPlanetsStarWars from '../Services/fetchAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilters] = useState('');

  const fetchPlanetsStarWars = async () => {
    const { results } = await getPlanetsStarWars();
    results.forEach((element) => delete element.residents);
    setData(results);
  };

  const context = {
    data,
    fetchPlanetsStarWars,
    setFilters,
    filter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: shape().isRequired,
};

export default StarWarsProvider;
