import React, { useState } from 'react';

import PlaylistItem from '../PlaylistItem/PlaylistItem';
import styles from './playlist.module.css';

export default function Playlist({ trackArray, removePlaylistItem, handleMoveUp, handleMoveDown }) {

    const [name, setName] = useState('');

    return (   
        <section className={styles.container} >
            <label for='playlistName'>Playlist Name:</label>
            <input type='text' name='playlistName' id='playlistName' value={name} onChange={(e) => setName(e.target.value) } ></input>
            {(trackArray.length !== 0) ? (trackArray.map((element, index) => <PlaylistItem trackInfo={element} key={element.id} removePlaylistItem={removePlaylistItem} myIndex={index} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} isLastItem={index === (trackArray.length - 1)} />)) : (<p>Currently Empty</p>)}
        </section>
    );
}