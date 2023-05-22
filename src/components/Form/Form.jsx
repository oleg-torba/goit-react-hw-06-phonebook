

import Css from '../ContactList/ContactList.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';


export function Form() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch()

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
    setName('')
    setNumber('')
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit({ name, number });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <p className={Css.contactItem}>Name</p>
        <input
          type="text"
          name="name"
         value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
         onChange={handleChange}
        />
      </label>

      <label>
        <p className={Css.contactItem}>Number</p>
        <input
          className="formInput"
          type="tel"
          name="number"
         value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className="formBtn" type="submit">
        Add contact
      </button>
    </form>
  );
}

