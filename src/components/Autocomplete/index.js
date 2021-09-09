import React from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from 'src/components/LoadingSpinner';

import './styles.scss';

const Autocomplete = ({ query, list, onClickCity }) => (
  <div className="autocomplete">
    <ul className="autocomplete__list">
      {list.length > 0 && query !== ''
        ? list && list.map((item) => (
          <li key={item.name} className="autocomplete__list__item">
            <p className="autocomplete__list__item__city" onClick={onClickCity}>{item.name}</p>
          </li>
        ))
        : <LoadingSpinner />}
    </ul>
  </div>
);

Autocomplete.propTypes = {
  query: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default Autocomplete;
