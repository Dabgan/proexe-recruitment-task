import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAddUser, fetchEditUser } from '../../reducers/usersReducer';

const Form = ({ userData }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState(userData?.name || '');
    const [email, setEmail] = useState(userData?.email || '');
    const [emailError, setEmailError] = useState(false);

    const isEmailValid = (email) => {
        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
        return emailRegex.test(email);
    };

    const editUserInDatabase = async (id, updatedUser) => {
        try {
            dispatch(fetchEditUser({ id, updatedUser }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = () => {
        if (!isEmailValid(email)) {
            setEmailError('Please provide a valid email');
            return;
        }
        if (userData?.id) {
            editUserInDatabase(userData.id, { name, email });
        } else {
            dispatch(
                fetchAddUser({
                    id: Math.floor(Math.random() * 1000),
                    name,
                    email,
                })
            );
        }
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <FormControl>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
