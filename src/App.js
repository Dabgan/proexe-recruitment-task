import React from 'react';
import UserList from './components/UserList/UserList';
import UsersModal from './components/UsersModal/UsersModal';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Dashboard</h1>
                <UserList></UserList>
                <UsersModal></UsersModal>
            </header>
        </div>
    );
}

export default App;
