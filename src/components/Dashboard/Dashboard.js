import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

import Search from '../Search/Search';
import TrackListings from '../TrackListings/TrackListings';
import Playlist from '../Playlist/Playlist';

export default function Dashboard({ profile, isAppLoading }) {

    const [tracklist, setTracklist] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    function addPlaylistItem(trackInfo) {
        setPlaylist((prev) => {
            return [...prev, trackInfo]
        });
    }

    function removePlaylistItem(trackId){
        const filtered = playlist.filter((element) => element.id !== trackId);
        setPlaylist(filtered);
    }

    function handleMoveUp(myIndex){
        setPlaylist((prev) => {
            let playlistBeforeMove = prev.slice(0, myIndex-1);
            let switchedArray = prev.slice(myIndex-1, myIndex+1).reverse();
            let playlistAfterMove = prev.slice(myIndex+1, prev.length);

            return [...playlistBeforeMove, ...switchedArray, ...playlistAfterMove];
        });
    }

    function handleMoveDown(myIndex){
        setPlaylist((prev) => {
            let playlistBeforeMove = prev.slice(0, myIndex);
            let switchedArray = prev.slice(myIndex, myIndex+2).reverse();
            let playlistAfterMove = prev.slice(myIndex+2, prev.length);

            return [...playlistBeforeMove, ...switchedArray, ...playlistAfterMove];
        });
    }

    return (
        <main>
            <section className='greeting'>
                {(isAppLoading) ? (
                    <h1>Loading ...</h1>
                ) : (
                    <h1>Welcome {profile.display_name} to your dashboard. </h1>
                )}
            </section>
            <section className={styles.search} >
                <Search setTracklist={setTracklist} />
            </section >
            <section className={styles.panels}>
                <section className={styles.results_container}>
                    <h2>Results</h2>
                    <TrackListings trackArray={tracklist} addPlaylistItem={addPlaylistItem} />
                </section>
                <section className={styles.playlist_container} >
                    <Playlist trackArray={playlist} removePlaylistItem={removePlaylistItem} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} />
                </section>
            </section>

        </main >
    );
};