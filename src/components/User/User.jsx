import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchDeleteUser,
    fetchEditUser,
    openModal,
    setUser,
    selectAllUsers,
} from '../../reducers/usersReducer';

const User = ({ userData }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);

    const handleEditUser = () => {
        // dispatch(setUser(userData.id));
        // dispatch(openModal());
        // dispatch(editUserInDatabase(userData.id, updatedUser));
    };
    const handleDeleteUser = () => {
        dispatch(setUser(userData.id));
        dispatch(openModal());
    };

    return (
        <>
            <TableRow
                key={userData.id}
                sx={{
                    '&:last-child td, &:last-child th': {
                        border: 0,
                    },
                }}
            >
                <TableCell component="th" scope="row">
                    {userData.id}
                </TableCell>
                <TableCell>{userData?.name}</TableCell>
                <TableCell>{userData?.username}</TableCell>
                <TableCell>{userData?.email}</TableCell>
                <TableCell>{userData?.address?.city}</TableCell>
                <TableCell>
                    <Button
                        color="warning"
                        variant="contained"
                        onClick={handleEditUser}
                    >
                        Edit
                    </Button>
                </TableCell>
                <TableCell>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleDeleteUser}
                    >
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default User;
