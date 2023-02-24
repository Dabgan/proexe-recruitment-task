import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/add';
import Edit from './pages/edit';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/edit" element={<Edit />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
