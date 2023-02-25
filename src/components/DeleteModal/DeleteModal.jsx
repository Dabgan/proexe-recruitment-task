import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    closeModal,
    fetchDeleteUser,
    findUserById,
} from '../../reducers/usersSlice';

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
    const { currentUserId, isModalOpen, users } = useSelector(
        (state) => state.users
    );
    const user = findUserById(users, currentUserId);

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
