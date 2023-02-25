import React from 'react';
import Form from '../components/Form/Form';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useUserActions } from '../hooks/useUserActions';

const Edit = () => {
    const { id } = useParams();
    const { handleNavigateHome, handleFindUserById } = useUserActions();
    const user = handleFindUserById(parseInt(id));

    if (!user) {
        return (
            <section>
                <h1>User not found!</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNavigateHome}
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
