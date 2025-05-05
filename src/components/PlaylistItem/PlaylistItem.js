import React from 'react';
import styles from './playlistItem.module.css';

export default function PlaylistItem({ trackInfo, removePlaylistItem, handleMoveUp, handleMoveDown, myIndex, isLastItem }) {

    function handleRemoveClick(){
        removePlaylistItem(trackInfo.id);
    }

    function handleDownClick(){
        handleMoveDown(myIndex);
    }

    function handleUpClick() {
        handleMoveUp(myIndex);
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

            <div className={styles.controls} >
                <button className={styles.remove} type='button' onClick={handleRemoveClick} >➖</button>
                <div className={styles.move} >
                    {(myIndex > 0) ? (<button type='button' onClick={handleUpClick} >⬆️</button>) : ('')}
                    {(!isLastItem) ? (<button type='button' onClick={handleDownClick} >⬇️</button>) : ('')}
                </div>
            </div>
            
        </section>
    );
}