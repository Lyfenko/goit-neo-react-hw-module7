import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Пошук контактів:
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          className={styles.input}
        />
      </label>
    </div>
  );
}
