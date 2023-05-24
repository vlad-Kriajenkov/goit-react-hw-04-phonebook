import React, { Component } from "react";
import {
  Form,
  ContainerPhoneBook,
  Labe,
  TitlePhoneBook,
  Input,
  Button,
} from "./Phonebook.styled";

export default class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
  };
  render() {
    const { name, phone } = this.state;
    return (
      <ContainerPhoneBook>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <Form action="" onSubmit={this.handelSubmit}>
          <Labe>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handlerChange}
            />
          </Labe>
          <Labe>
            Phone
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={phone}
              onChange={this.handlerChange}
            />
          </Labe>

          <Button type="submit">Add contact</Button>
        </Form>
      </ContainerPhoneBook>
    );
  }
}
