import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YodaContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByNumericValues: [] });
  const [customizedFilter, setCustomizedFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [showToast, setShowToast] = useState([]);
  const [filterReady, setFilterReady] = useState(false);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const r2d2Context = {
    setData,
    data,
    filteredPlanets,
    setFilteredPlanets,
    isLoading,
    setIsLoading,
    filters,
    setFilters,
    showToast,
    setShowToast,
    customizedFilter,
    setCustomizedFilter,
    filterReady,
    setFilterReady,
    columns,
    setColumns,
    order,
    setOrder,
  };
  return (
    <YodaContext.Provider value={ r2d2Context }>
      {children}
    </YodaContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};
export default Provider;
