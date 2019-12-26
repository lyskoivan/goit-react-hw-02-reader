import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterContacts.module.css';

const FilterContacts = ({ filter, handleFilter }) => (
  <input
    type="text"
    value={filter}
    onChange={handleFilter}
    placeholder="Filter..."
    className={styles.contacts__filter}
  />
);

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
export default FilterContacts;
