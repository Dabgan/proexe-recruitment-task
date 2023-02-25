import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openModal, setCurrentUserId } from '../../reducers/usersSlice';

const User = ({ userData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditUser = () => {
        dispatch(setCurrentUserId(userData.id));
        navigate(`/user/${userData.id}`);
    };
    const handleDeleteUser = () => {
        dispatch(setCurrentUserId(userData.id));
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
