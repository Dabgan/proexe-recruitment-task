import React from 'react';
import {
    Button,
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
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';
import User from '../User/User';

const UserList = () => {
    const { users, isLoading, error } = useSelector((state) => state.users);
    const navigate = useNavigate();

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate('/add');
                    }}
                >
                    Add user
                </Button>
            </div>
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
