import React from 'react';
import styles from './Contact.module.css';
import { FaUser, FaPhone, FaTrash } from 'react-icons/fa';

const Contact = ({ name, numbers, onDelete }) => (
  <li className={styles.contactItem}>
    <div className={styles.contactInfo}>
      <FaUser className={styles.icon} />
      <p>{name}</p>
      <FaPhone className={styles.icon} />
      <p>{numbers}</p>
    </div>
    <button onClick={onDelete} className={styles.deleteButton}>
      <FaTrash />
    </button>
  </li>
);

export default Contact;
