import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    openModal,
    setCurrentUserId,
    sortUsers,
    fetchDeleteUser,
    closeModal,
} from '../reducers/usersSlice';

export const useUserActions = (userData) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenAddUser = () => {
        navigate('/add');
    };

    const handleOpenEditUser = () => {
        dispatch(setCurrentUserId(userData.id));
        navigate(`/user/${userData.id}`);
    };

    const handleOpenDeleteModal = () => {
        dispatch(setCurrentUserId(userData.id));
        dispatch(openModal());
    };

    const handleSortUsers = () => {
        dispatch(sortUsers());
    };

    const handleDeleteUser = (userId) => {
        dispatch(fetchDeleteUser(userId));
        dispatch(closeModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return {
        handleOpenAddUser,
        handleOpenEditUser,
        handleOpenDeleteModal,
        handleSortUsers,
        handleDeleteUser,
        handleCloseModal,
    };
};
