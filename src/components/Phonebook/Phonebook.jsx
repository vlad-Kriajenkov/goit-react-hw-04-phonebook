import { useState } from "react";
import {
  Form,
  ContainerPhoneBook,
  Labe,
  TitlePhoneBook,
  Input,
  Button,
} from "./Phonebook.styled";

export default function Phonebook(addContact) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const [contacts, setContacts] = useState([]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    addContact.onSubmit({ name, number });
  };
  return (
    <ContainerPhoneBook>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <Form action="" onSubmit={handelSubmit}>
        <Labe>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handlerChange}
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
            value={number}
            onChange={handlerChange}
          />
        </Labe>

        <Button type="submit">Add contact</Button>
      </Form>
    </ContainerPhoneBook>
  );
}
