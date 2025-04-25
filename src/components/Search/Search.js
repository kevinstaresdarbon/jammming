import React, { useState } from 'react';
import styles from './Search.module.css';

export default function Search({handleSearchSubmit}) {

    const [input, setInput] = useState('');

    return (
        <form className={styles.searchform} onSubmit={handleSearchSubmit}>
            <input 
                className={styles.searchbar} 
                type='text' 
                maxlength='42' 
                placeholder={`Search the spotify api`} 
                value={input} 
                onChange={ ({target}) => setInput(target.value) } 
            />
            <input className={styles.searchsubmit} type='submit' value='🔍' />
        </form>
    )}