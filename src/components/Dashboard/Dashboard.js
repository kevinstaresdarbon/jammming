import React, { useEffect, useState } from 'react';

import Search from '../Search/Search';

export default function Dashboard({ profile, isAppLoading }) {

    const [tracklist, setTracklist] = useState([]);


    return (

        <main>
            <section className='greeting'>
                {(isAppLoading) ? (
                    <h1>Loading ...</h1>
                ) : (
                    <h1>Welcome {profile.display_name} to your dashboard. Here you can search spotify for tracks and re-arrange your imported playlists!</h1>
                )}
            </section>
            < section className='search' >
                <Search setTracklist={setTracklist} />
            </section >
        </main >
    );
};