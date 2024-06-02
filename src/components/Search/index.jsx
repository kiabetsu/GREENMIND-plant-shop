import React from "react";

import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
    return(
        <div className={styles.root}>
            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={styles.input} placeholder="What are you looking for?" />
        </div>
    )
}

export default Search;