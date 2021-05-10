import { shape } from 'prop-types';
import React, { useState } from 'react';
import getPlanetsStarWars from '../Services/fetchAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([{
    count: 0,
    next: '',
    previous: null,
    results: {
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      url: '',
    },
  }]);

  const fetchPlanetsStarWars = async () => {
    const { results } = await getPlanetsStarWars();
    results.forEach((element) => delete element.residents);
    setData(results);
  };

  const context = {
    data,
    fetchPlanetsStarWars,
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
