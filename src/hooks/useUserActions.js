import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    openModal,
    setCurrentUserId,
    sortUsers,
    fetchDeleteUser,
    closeModal,
    selectAllUsers,
    findUserById,
} from '../reducers/usersSlice';

export const useUserActions = (userData) => {
    const { users } = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };
    const handleNavigateAdd = () => {
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

    const handleFindUserById = (id) => {
        return findUserById(users, id);
    };

    return {
        handleNavigateHome,
        handleNavigateAdd,
        handleOpenEditUser,
        handleOpenDeleteModal,
        handleSortUsers,
        handleDeleteUser,
        handleCloseModal,
        handleFindUserById,
    };
};
