import React, { useState } from 'react';
import styles from './search.module.css';
import axios from 'axios';

export default function Search({ setTracklist }) {

    const [input, setInput] = useState('');

    async function handleSearchSubmit(e) {
        e.preventDefault();

        const response = await axios.get('https://jammin_api.unchained.vip/api/search', {
            params: {
                q: input
            },
            withCredentials: true
        });

        const resultsByPopularity = response.data.trackArray.sort((a,b) => b.popularity - a.popularity);
        
        //flatten and store only relevant data from the response
        let minimizedResults = [];
        resultsByPopularity.forEach((element, index) => minimizedResults[index] = {      
            id: element.id,
            name: element.name,
            artist: element.artists[0].name,
            albumName: element.album.name,
            images: element.album.images,
            popularity: element.popularity,
            uri: element.uri
        });
        setTracklist(minimizedResults);
    }

    return (
        <form className={styles.searchform} onSubmit={handleSearchSubmit}>
            <input
                className={styles.searchbar}
                type='text'
                maxlength='42'
                id='search_bar'
                placeholder={`Search the spotify api`}
                value={input}
                onChange={({ target }) => setInput(target.value)}
            />
            <input className={styles.searchsubmit} type='submit' value='🔍' />
        </form>
    );
}