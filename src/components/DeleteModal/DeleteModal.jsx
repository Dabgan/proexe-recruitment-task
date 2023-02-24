import React, { useEffect, useState } from 'react';
import { Modal, TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
    closeModal,
    fetchAddUser,
    selectAllUsers,
    fetchEditUser,
    fetchDeleteUser,
} from '../../reducers/usersReducer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DeleteModal = () => {
    const { user, isModalOpen } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(fetchDeleteUser(user.id));
        dispatch(closeModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <Modal open={isModalOpen} onClose={handleCloseModal} sx={style}>
            <Box sx={style}>
                <h2>Are you sure you want to delete this user? {user?.name}</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteUser}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCloseModal}
                >
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default DeleteModal;
