import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  if (contacts.length === 0) {
    return <p className={styles.noContacts}>Контактів не знайдено</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, numbers }) => (
        <li key={id} className={styles.item}>
          <p className={styles.contactText}>
            {name}: {numbers}
          </p>
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={styles.button}
          >
            <FaTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
}
