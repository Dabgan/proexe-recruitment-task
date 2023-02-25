import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import useUserForm from '../../hooks/useUserForm.js';

const Form = ({ userData }) => {
    const {
        name,
        email,
        emailError,
        saveUser,
        handleNameChange,
        handleEmailChange,
        handleCancel,
    } = useUserForm(userData);

    const handleSave = () => {
        saveUser({ id: userData?.id, name, email });
    };

    return (
        <FormControl>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError || ''}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={!name || !email}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
            >
                Cancel
            </Button>
        </FormControl>
    );
};

export default Form;
