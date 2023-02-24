import React from 'react';
import UserList from './components/UserList/UserList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Dashboard</h1>
                <UserList></UserList>
            </header>
        </div>
    );
}

export default App;
