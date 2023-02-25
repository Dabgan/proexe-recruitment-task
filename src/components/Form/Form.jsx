import React from 'react';
import { Box, Button, FormGroup, TextField } from '@mui/material';
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

    const handleSave = (e) => {
        e.preventDefault();
        saveUser({ id: userData?.id, name, email });
    };

    return (
        <form onSubmit={handleSave}>
            <FormGroup>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    sx={{ marginBottom: 3 }}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError || ''}
                    sx={{ marginBottom: 3 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCancel}
                        sx={{ marginRight: 5, paddingInline: 8 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        disabled={!name || !email}
                        type="submit"
                        sx={{ paddingInline: 8 }}
                    >
                        Save
                    </Button>
                </Box>
            </FormGroup>
        </form>
    );
};

export default Form;
