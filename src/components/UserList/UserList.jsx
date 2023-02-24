import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    getUsers,
    fetchUsers,
    fetchAddUser,
    fetchEditUser,
    fetchDeleteUser,
} from '../../reducers/usersReducer';

const UserList = () => {
    const { users, isLoading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const handleAddUser = (newUser) => {
        // dispatch(fetchAddUser(newUser));
    };
    const handleEditUser = (userId) => {
        dispatch(fetchEditUser(userId, { name: 'testing', email: 'testing' }));
    };
    const handleDeleteUser = (userId) => {
        dispatch(fetchDeleteUser(userId));
    };

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="users table">
                <TableHead>
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleAddUser({
                                id: users.length + 1,
                                name: 'TESTING',
                                username: 'Bret',
                                email: 'Sincere@april.biz',
                                address: {
                                    street: 'Kulas Light',
                                    suite: 'Apt. 556',
                                    city: 'Gwenborough',
                                    zipcode: '92998-3874',
                                    geo: {
                                        lat: '-37.3159',
                                        lng: '81.1496',
                                    },
                                },
                                phone: '1-770-736-8031 x56442',
                                website: 'hildegard.org',
                                company: {
                                    name: 'Romaguera-Crona',
                                    catchPhrase:
                                        'Multi-layered client-server neural-net',
                                    bs: 'harness real-time e-markets',
                                },
                            });
                        }}
                    >
                        Add user
                    </Button>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users &&
                        users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.address.city}</TableCell>
                                <TableCell>
                                    <Button
                                        color="warning"
                                        variant="contained"
                                        onClick={() => handleEditUser(1)}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        color="error"
                                        variant="contained"
                                        onClick={() => handleDeleteUser(1)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserList;
