import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form/Form';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAllUsers, findUserById } from '../reducers/usersReducer';

const Edit = (props) => {
    const { id } = useParams();
    const { users } = useSelector(selectAllUsers);
    const user = findUserById(users, parseInt(id));

    const navigate = useNavigate();

    if (!user) {
        return (
            <section>
                <h1>User not found!</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')}
                >
                    Go back
                </Button>
            </section>
        );
    }

    return (
        <div>
            <h1>Edit user</h1>
            <Form userData={user}></Form>
        </div>
    );
};

export default Edit;
