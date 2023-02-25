import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useUserActions } from '../../hooks/useUserActions';
import { findUserById } from '../../reducers/usersSlice';

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
    const { handleDeleteUser, handleCloseModal } = useUserActions();
    const user = findUserById(users, currentUserId);

    return (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box sx={style}>
                <h2>Are you sure you want to delete {user?.name}?</h2>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCloseModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDeleteUser(user.id)}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteModal;
