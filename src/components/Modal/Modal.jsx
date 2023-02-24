import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

const MyModal = ({ isOpen, handleClose }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };

    const handleSaveClick = () => {
        if (name.trim() === '') {
            setNameError(true);
        }
        if (email.trim() === '') {
            setEmailError(true);
        }
        if (name.trim() !== '' && email.trim() !== '') {
            myFunction();
        }
    };

    const myFunction = () => {
        // your code here
        handleClose();
    };

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <div className={classes.paper}>
                <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                    error={nameError}
                    helperText={nameError ? 'Name cannot be empty' : ''}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError ? 'Email cannot be empty' : ''}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveClick}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default MyModal;
