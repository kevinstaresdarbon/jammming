import React, { useState } from 'react';
import TrackItem from './TrackItem';
import styles from './trackItem.module.css';

export default function TrackItemContainer({ trackInfo, addPlaylistItem }) {

    function handleClick() {
        addPlaylistItem(trackInfo);
    }

    return (
        <section className={styles.container}>
            <TrackItem id={trackInfo.id} key={trackInfo.id} name={trackInfo.name} albumName={trackInfo.albumName} artist={trackInfo.artist} thumbnail={trackInfo.images[2].url} addPlaylistItem={addPlaylistItem} />
            <button className={styles.add} type='button' onClick={handleClick} >➕</button>
        </section>

    )
}