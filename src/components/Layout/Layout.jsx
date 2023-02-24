import { Container } from '@mui/material';
import { fetchUsers } from '../../reducers/usersReducer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DeleteModal from '../DeleteModal/DeleteModal';

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <Container>
            <h1>Dashboard</h1>
            {children}
        </Container>
    );
};

export default Layout;
