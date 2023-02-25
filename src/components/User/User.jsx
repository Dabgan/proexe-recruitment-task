import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';
import { useUserActions } from '../../hooks/useUserActions';

const User = ({ userData }) => {
    const { handleOpenEditUser, handleOpenDeleteModal } =
        useUserActions(userData);
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
                        onClick={handleOpenEditUser}
                    >
                        Edit
                    </Button>
                </TableCell>
                <TableCell>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleOpenDeleteModal}
                    >
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default User;
