import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const Contact = ({ name, number, handleDeleteContact }) => (
  <>
    <span className={styles.item__name}>
      {name} {number}
    </span>
    <button
      type="button"
      onClick={handleDeleteContact}
      className={styles.item__button}
    >
      Delete
    </button>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
