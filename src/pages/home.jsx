import React from 'react';
import UserList from './../components/UserList/UserList';
import UsersModal from './../components/UsersModal/UsersModal';

const Home = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <UserList></UserList>
            <UsersModal></UsersModal>
        </div>
    );
};

export default Home;
