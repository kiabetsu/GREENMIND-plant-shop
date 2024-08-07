import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSlice';

const Search = () => {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const updateSearch = React.useCallback(
    debounce((event) => {
      dispatch(setSearch(event));
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        value={value}
        onChange={(event) => onChangeInput(event)}
        className={styles.input}
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default Search;
