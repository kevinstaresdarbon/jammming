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
                    <Playlist trackArray={playlist} removePlaylistItem={removePlaylistItem} />
                </section>
            </section>

        </main >
    );
};