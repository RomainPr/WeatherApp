import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Search = ({ query, onChangeQuery, onSubmitQuery }) => (
  <form className="searchQuery">
    <Input
      icon="search"
      iconPosition="left"
      placeholder="Chercher une ville"
      className="searchQuery__input"
      value={query}
      onSubmit={onSubmitQuery}
      onChange={onChangeQuery}
    />
  </form>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  onSubmitQuery: PropTypes.func.isRequired,
};

export default Search;
