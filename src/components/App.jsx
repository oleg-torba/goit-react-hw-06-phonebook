import { Form } from './Form/Form';
import { Section } from './Section/Section';

import { Filter } from './Filter/FilterContacts';

import { ContactList } from './ContactList/ContactList';

import { Notification } from './Notification/Notification';

import { useSelector } from 'react-redux';

export function App() {
  
  const contacts = useSelector(state => state.contacts);

 

  return (
    <>
      <Section title="Phonebook">
        <Form/>
      </Section>
      <Section title="Contacts">
        <Filter />

       {contacts.contacts.length > 0 ? 
        <ContactList /> :  <Notification message="There are no contacts" />}

       
      </Section>
    </>
  );
}

