import React from 'react';
import { Link } from 'react-router';
import { VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === SHOW_ALL ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    {children}
  </Link>
);

export default FilterLink;
