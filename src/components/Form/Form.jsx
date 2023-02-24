import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchAddUser } from '../../reducers/usersReducer';

import './Form.css';
// import { addUser } from '../redux/userSlice';

const UserForm = ({ handleClose }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    // const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const isEmailValid = (email) => {
        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
        return emailRegex.test(email);
    };

    const handleSave = () => {
        if (!isEmailValid(email)) {
            setEmailError('Please provide a valid email');
            return;
        }
        dispatch(
            fetchAddUser({
                id: Math.floor(Math.random() * 1000),
                name,
                email,
            })
        );
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
                // className={}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField
                // className={'form__control'}
                id="email"
                label="Email"
                variant="outlined"
                // className={}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={!!emailError}
                helperText={emailError || ''}
            />
            <Button
                variant="contained"
                color="primary"
                // className={classes.button}
                onClick={handleSave}
                disabled={!name || !email}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="secondary"
                // className={classes.button}
                onClick={handleCancel}
            >
                Cancel
            </Button>
        </FormControl>
    );
};

export default UserForm;
