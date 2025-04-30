import React from 'react';

import TrackItemContainer from '../TrackItem/TrackItemContainer';

export default function TrackListings({trackArray}){
    return (
        <section>
            { (trackArray.length !== 0) ? (trackArray.map( (element) => <TrackItemContainer trackInfo={element} />)) : (<p>Currently Empty</p>) }
        </section>
    );
}