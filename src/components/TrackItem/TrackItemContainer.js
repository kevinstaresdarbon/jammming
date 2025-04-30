import React , { useState } from 'react';
import TrackItem from './TrackItem';

export default function TrackItemContainer({trackInfo}) {

    const [trackId, setTrackId] = useState(trackInfo.id);
    const [trackName, setTrackName] = useState(trackInfo.name);
    const [artist, setArtist] = useState(trackInfo.artist);
    const [images, setImages] = useState(trackInfo.images);
    const [albumName, setAlbumName] = useState(trackInfo.albumName);
    const [popularity, setPopularity] = useState(trackInfo.popularity);
    const [uri, setUri] = useState(trackInfo.uri);

    return <TrackItem id={trackId} name={trackName} albumName={albumName} artist={artist} thumbnail={images[2].url} popularity={popularity} uri={uri} />

}