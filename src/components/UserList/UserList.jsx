import React from 'react';
import {
    Button,
    Box,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useUserActions } from '../../hooks/useUserActions';
import DeleteModal from '../DeleteModal/DeleteModal';
import User from '../User/User';

const UserList = () => {
    const { users, isLoading, error } = useSelector((state) => state.users);
    const { handleNavigateAdd, handleSortUsers } = useUserActions();

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                }}
            >
                <Button variant="contained" onClick={handleNavigateAdd}>
                    Add user
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleSortUsers}
                >
                    Sort by Username
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="users table">
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
                        {users.length === 0 && (
                            <TableRow>
                                <TableCell>No users found</TableCell>
                            </TableRow>
                        )}
                        {users &&
                            users.map((user) => (
                                <User key={user.id} userData={user}></User>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteModal />
        </>
    );
};

export default UserList;
