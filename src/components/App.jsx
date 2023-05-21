import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/FilterContacts';
import { addContact } from 'redux/ContactsSlice';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { Notification } from './Notification/Notification';

import { useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const formSubmit = data => {
    const findDublicate = contacts.contacts.some(
      contact => contact.data.name.toLowerCase() === data.name.toLowerCase()
    );
    if (findDublicate) {
      alert(`${data.name} already exsist`);
      return;
    }
    const numbers = {
      id: nanoid(),
      data,
    };
    dispatch(addContact(numbers));
  };

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter />

        <ContactList />

        <Notification message="There are no contacts" />
      </Section>
    </>
  );
}

