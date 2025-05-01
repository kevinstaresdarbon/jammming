import React from 'react';

import TrackItemContainer from '../TrackItem/TrackItemContainer';
import styles from './trackListings.module.css';

export default function TrackListings({trackArray, addPlaylistItem}){
    return (
        <section className={styles.container} >
            { (trackArray.length !== 0) ? (trackArray.map( (element) => <TrackItemContainer key={element.id} trackInfo={element} addPlaylistItem={addPlaylistItem} />)) : (<p>Currently Empty</p>) }
        </section>
    );
}