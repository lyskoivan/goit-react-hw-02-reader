import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../Contact/Contact';

import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, handleDeleteContact }) => (
  <ul className={styles.contacts__list}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.list__items}>
        <Contact
          name={contact.name}
          number={contact.number}
          handleDeleteContact={() => handleDeleteContact(contact.id)}
        />
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
