import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAddUser, fetchEditUser } from '../reducers/usersSlice';

const useUserForm = (userData) => {
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

    const saveUser = async ({ id, name, email }) => {
        if (!isEmailValid(email)) {
            setEmailError('Please provide a valid email');
            return;
        }
        try {
            if (id) {
                await dispatch(
                    fetchEditUser({ id, updatedUser: { name, email } })
                );
            } else {
                await dispatch(
                    fetchAddUser({
                        id: Math.floor(Math.random() * 1000),
                        name,
                        email,
                    })
                );
            }
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return {
        name,
        email,
        emailError,
        setEmailError,
        isEmailValid,
        saveUser,
        handleNameChange,
        handleEmailChange,
        handleCancel,
    };
};

export default useUserForm;
