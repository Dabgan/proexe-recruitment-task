import { Container } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Container>
            <h1>Dashboard</h1>
            {children}
        </Container>
    );
};

export default Layout;
