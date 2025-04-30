import React from 'react';
import styles from './trackItem.module.css';

export default function TrackItem({name, albumName, artist, thumbnail }) {

    return (
        <section className={styles.track_item}>
            <picture>
                <img src={thumbnail} />
            </picture>
            <section>
                <h1>{name}</h1>
                <h2> from {albumName}</h2>
                <h3> by {artist} </h3>
            </section>
            <button type='button'>➕</button>
        </section>
    );
}