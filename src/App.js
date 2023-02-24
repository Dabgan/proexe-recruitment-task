import React from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Add from './pages/add';
import Edit from './pages/edit';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route
                        exact
                        path="/editPost/:userId"
                        component={<Edit></Edit>}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
