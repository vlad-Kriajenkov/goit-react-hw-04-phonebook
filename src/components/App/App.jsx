import React, { Component } from "react";
import { nanoid } from "nanoid";

import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";

const CB_KEY = "contact";
export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      let contactPars = JSON.stringify(this.state.contacts);
      localStorage.setItem(CB_KEY, contactPars);
    }
  }
  componentDidMount() {
    let contactBook = JSON.parse(localStorage.getItem(CB_KEY));
    this.setState({
      contacts: contactBook,
    });
  }
  addContact = ({ name, number }) => {
    const conatactId = nanoid();
    const newContact = {
      id: conatactId,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  removeContact = (idDelete) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idDelete),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalaize = this.state.filter.toLowerCase();

    const vizible = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalaize)
    );

    return (
      <div>
        <Phonebook onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={vizible} removeContact={this.removeContact} />
      </div>
    );
  }
}
