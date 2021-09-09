import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Autocomplete from 'src/components/Autocomplete';

import './styles.scss';

const Search = ({
  query,
  complete,
  onChangeQuery,
  onSubmitQuery,
  data,
  updateInputValue,
}) => (
  <div>
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
    {complete
      && (
        <Autocomplete
          query={query}
          list={data}
          onClickCity={updateInputValue}
        />
      )}
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  onSubmitQuery: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  updateInputValue: PropTypes.func.isRequired,
};

export default Search;
