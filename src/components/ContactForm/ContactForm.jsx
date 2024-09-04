import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [numbers, setNumbers] = useState('');
  const [errors, setErrors] = useState({ name: '', numbers: '' });
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', numbers: '' };

    if (!name || name.length < 3 || name.length > 50) {
      newErrors.name = "Ім'я повинно містити від 3 до 50 символів.";
      isValid = false;
    }

    // Загальний регулярний вираз для телефонного номера
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!numbers || !phoneRegex.test(numbers)) {
      newErrors.numbers = 'Номер телефону повинен бути в правильному форматі, наприклад, +12345678900.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} вже є в контактах!`);
      return;
    }

    if (!validateForm()) return;

    dispatch(addContact({ name, numbers }));
    setName('');
    setNumbers('');
    setErrors({ name: '', numbers: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Ім'я:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
          required
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </label>
      <label className={styles.label}>
        Телефон:
        <input
          type="tel"
          value={numbers}
          onChange={e => setNumbers(e.target.value)}
          className={styles.input}
          placeholder="+12345678900"
          required
        />
        {errors.numbers && <p className={styles.error}>{errors.numbers}</p>}
      </label>
      <button type="submit" className={styles.button}>Додати контакт</button>
    </form>
  );
}
