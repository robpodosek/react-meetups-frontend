import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u123',
            name: 'Robbie P',
            image: 'https://placekitten.com/500/500',
            places: 3,
        },
    ];
    return <UsersList items={USERS} />;
};

export default Users;
