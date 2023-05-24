import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";

const CB_KEY = "contact";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const conatactId = nanoid();
    const newContact = {
      id: conatactId,
      name,
      number,
    };

    setContacts((preContacts) => [...preContacts, newContact]);
  };
  useEffect(() => {
    let contactBook = JSON.parse(localStorage.getItem(CB_KEY));
    setContacts(contactBook ?? []);
  }, []);

  useEffect(()=>{
    window.localStorage.setItem('contacts',JSON.stringify(contacts) )
  },[contacts])
  
  const removeContact = (idDelete) => {
    console.log(idDelete);

    setContacts(contacts.filter(({ id }) => id !== idDelete));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  const normalaize = filter.toLowerCase();
 
  const vizible = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(normalaize)
  );

  return (
    <div>
      <Phonebook onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={vizible} removeContact={removeContact} />
    </div>
  );
}
