import React from 'react';

import Css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/ContactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const visibleContacts = contacts.contacts.filter(contact =>
    contact.data.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={Css.contactBlock}>
        {visibleContacts.map(item => {
          return (
            <>
              <li className={Css.contactList} key={item.id}>
                <div className={Css.contactValue}>
                  <span className={Css.contactItem}>{item.data.name}</span>
                  <span className={Css.contactItem}>{item.data.number}</span>
                </div>
                <button type="button" onClick={() => deleteContacts(item.id)}>
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
