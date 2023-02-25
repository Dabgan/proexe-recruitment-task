import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Box
                sx={{
                    border: '1px solid #e0e0e0',
                    padding: 2,
                    backgroundColor: '#f5f5f5',
                    borderRadius: '12px',
                    boxShadow: '2px 2px 10px 0 rgba(0, 0, 0, 0.3)',
                }}
            >
                {children}
            </Box>
        </Container>
    );
};

export default Layout;
