import React from 'react';

import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        key: 'p1',
        id: 'p1',
        title: 'Space Needle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg',
        description: "One of Seattle's most iconic buildings.",
        address: '400 Broad Street, Seattle, Washington 98109',
        coordinates: { lat: 47.6204, lng: -122.3491 },
        creatorId: 'u1',
    },
    {
        key: 'p2',
        id: 'p2',
        title: 'Space Needle 2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg',
        description: "One of Seattle's most iconic buildings.",
        address: '400 Broad Street, Seattle, Washington 98109',
        coordinates: { lat: 47.6204, lng: 122.3491 },
        creatorId: 'u2',
    },
];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(
        place => place.creatorId === userId
    );

    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
