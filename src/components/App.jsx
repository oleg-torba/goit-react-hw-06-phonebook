
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/FilterContacts';
import { addContact } from 'redux/ContactsSlice';
import { ContactList } from './ContactList/ContactList';
import { addFIlteredContact } from 'redux/FilterSlice';
import { useDispatch } from 'react-redux';

// import { Filter } from './Filter/FilterContacts';
import { Notification } from './Notification/Notification';

import { useSelector} from "react-redux";

export function App (){
  const dispatch = useDispatch()
const contacts = useSelector(state => state.contacts)
const filter = useSelector(state => state.filter)
console.log(contacts)
 
   const formSubmit = data => {
    const findDublicate = contacts.some(
     contact => contact.data.name === data.name
   );
       if (findDublicate) {
      alert(`${data.name} already exsist`);
      return;
    }
        const numbers = {
      id: nanoid(),
      data,
    };
    dispatch(addContact(numbers))
  }
 
return (
  <><Section title="Phonebook">
    <Form onSubmit={formSubmit} />
  </Section>
  <Section title="Contacts">
  <Filter/>
      {contacts.length > 0 ? (
        <ContactList
          />
      ) : (
        <Notification message="There are no contacts" />
      )}
    </Section></>
  
)

}

// export function App() {
//   // const [contacts, setContacts] = UseLocalStorage('contacts', []);
//   // const [filter, setFilter] = useState('');


//   // const formSubmit = data => {
//   //   const findDublicate = contacts.some(
//   //     contact => contact.data.name.toLowerCase() === data.name.toLowerCase()
//   //   );

//   //   if (findDublicate) {
//   //     alert(`${data.name} already exsist`);
//   //     return;
//   //   }
//   //   const numbers = {
//   //     id: nanoid(),
//   //     data,
//   //   };

//   //   setContacts([numbers, ...contacts]);
//   // };

//   // const deleteContact = contactId => {
//   //   setContacts(prevState =>
//   //     prevState.filter(contact => contact.id !== contactId)
//   //   );
//   // };
//   // const changeFilter = e => {
//   //   setFilter(e.currentTarget.value);
//   // };

//   // return (
//   //   <>
//   //     <Section title="Phonebook">
//   //       <Form onSubmit={formSubmit} />
//   //     </Section>
//   //     <Section title="Contacts">
//   //       <Filter value={filter} onChange={changeFilter} />
//   //       {contacts.length > 0 ? (
//   //         <ContactList
//   //           contacts={visibleContacts}
//   //           removeContact={deleteContact}
//   //         />
//   //       ) : (
//   //         <Notification message="There are no contacts" />
//   //       )}
//   //     </Section>
//   //   </>
//   // );
// }
