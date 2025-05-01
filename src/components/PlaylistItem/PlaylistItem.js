import React from 'react';
import styles from './playlistItem.module.css';

export default function PlaylistItem({ trackInfo, removePlaylistItem }) {

    function handleClick(){
        removePlaylistItem(trackInfo.id);
    }

    return (
        <section className={styles.play_item}>
            <div className={styles.item}>
                <picture>
                    <img src={trackInfo.images[2].url} />
                </picture>
                <div className={styles.details}>
                    <h1>{trackInfo.name}</h1>
                    <h2> from {trackInfo.albumName}</h2>
                    <h3> by {trackInfo.artist} </h3>
                </div>
            </div>

            <button className={styles.remove} type='button' onClick={handleClick} >➖</button>
        </section>
    );
}