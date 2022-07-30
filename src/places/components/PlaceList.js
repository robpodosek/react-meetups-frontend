import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

import './PlaceList.css';

const PlaceList = props => {
    if (props.items === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found.</h2>
                    <button>Create New Place</button>
                </Card>
            </div>
        );
    }
    return (
        <ul className="place-list">
            {props.items.map(place => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.image}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creatorId}
                    coordinates={place.coordinates}
                />
            ))}
        </ul>
    );
};

export default PlaceList;
