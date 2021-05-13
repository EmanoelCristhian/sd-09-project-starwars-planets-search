import { shape } from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanetsStarWars from '../Services/fetchAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [columnValue, setColumnValue] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [columnValue],
  });

  useEffect(() => {
    setFilters({
      ...filters, filterByNumericValues: [{ ...columnValue }],
    });
  }, [columnValue]);

  const fetchPlanetsStarWars = async () => {
    const { results } = await getPlanetsStarWars();
    results.forEach((element) => delete element.residents);
    setData(results);
  };

  const context = {
    data,
    fetchPlanetsStarWars,
    setFilters,
    filters,
    columnValue,
    setColumnValue,
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
