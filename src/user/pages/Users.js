import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Robbie P',
            image: 'https://placekitten.com/500/500',
            places: 1,
        },
        {
            id: 'u2',
            name: 'Kristen H',
            image: 'https://placekitten.com/501/501',
            places: 1,
        },
        {
            id: 'u3',
            name: 'Marvin',
            image: 'https://placekitten.com/501/501',
            places: 3,
        },
    ];

    return <UsersList items={USERS} />;
};

export default Users;
