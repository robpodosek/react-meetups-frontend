import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        key: 'p1',
        id: 'p1',
        title: 'Space Needle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg',
        description: "One of Seattle's most iconic buildings.",
        address: '400 Broad Street, Seattle, Washington 98109',
        coordinates: { lat: 47.6204, long: 122.3491 },
        creatorId: 'u1',
    },
    {
        key: 'p1',
        id: 'p1',
        title: 'Space Needle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg',
        description: "One of Seattle's most iconic buildings.",
        address: '400 Broad Street, Seattle, Washington 98109',
        coordinates: { lat: 47.6204, long: 122.3491 },
        creatorId: 'u2',
    },
];
const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
