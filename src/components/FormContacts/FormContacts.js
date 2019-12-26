import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './FormContacts.module.css';

export default class FormContacts extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) return;

    const sameContact = this.props.contacts.find(
      contact => contact.name === this.state.name,
    );
    if (sameContact) {
      alert(`Contact ${this.state.name} is already exists in your phonebook!`);
    }

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    };

    this.props.addNewContact(newContact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.contacts__form}>
        <label htmlFor={shortid.generate()} className={styles.contacts__label}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChangeName}
            className={styles.contacts__input}
          />
        </label>
        <label htmlFor={shortid.generate()} className={styles.contacts__label}>
          Number
          <input
            type="tel"
            value={number}
            onChange={this.handleChangeNumber}
            className={styles.contacts__input}
          />
        </label>
        <button type="submit" className={styles.contacts__button}>
          Add contact
        </button>
      </form>
    );
  }
}
