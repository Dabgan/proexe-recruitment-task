// import React, { useEffect, useState } from 'react';
// import { Modal, TextField, Button, Box } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//     closeModal,
//     fetchAddUser,
//     selectAllUsers,
//     fetchEditUser,
// } from '../../reducers/usersReducer';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// const UsersModal = () => {
//     const { user, isModalOpen } = useSelector(selectAllUsers);

//     const [name, setName] = useState(user?.name || '');
//     const [email, setEmail] = useState(user?.email || '');
//     const [nameError, setNameError] = useState(false);
//     const [emailError, setEmailError] = useState(false);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         setName(user?.name || '');
//         setEmail(user?.email || '');
//     }, [user]);

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//         setNameError(false);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         setEmailError(false);
//     };

//     const cleanForm = () => {
//         setName('');
//         setEmail('');
//         setNameError('');
//         setEmailError('');
//     };

//     const validateForm = () => {
//         if (!name) {
//             setNameError('Name cannot be empty');
//         }
//         if (!email) {
//             return setEmailError('Email cannot be empty');
//         }
//         // if (!isEmailValid(email)) {
//         //     return setEmailError('Please enter a valid email address');
//         // }
//         // if (name && email && isEmailValid(email)) {
//         //     return { name, email };
//         // }
//     };

//     const editUserInDatabase = (id, updatedUser) => async (dispatch) => {
//         try {
//             const response = await dispatch(fetchEditUser({ id, updatedUser }));
//             // console.log(response.meta.arg.updatedUser); // API response
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSaveClick = () => {
//         if (!validateForm()) return;
//         if (user?.id) {
//             dispatch(editUserInDatabase(user.id, { name, email }));
//         } else {
//         }

//         cleanForm();
//         dispatch(closeModal());
//     };

//     const handleCloseModal = () => {
//         cleanForm();
//         dispatch(closeModal());
//     };

//     return (
//         // <Modal open={isModalOpen} onClose={handleCloseModal} sx={style}>
//         <Box sx={style}>
//             <TextField
//                 label="Name"
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 value={name}
//                 onChange={handleNameChange}
//                 error={!!nameError}
//                 helperText={nameError || ''}
//             />
//             <TextField
//                 label="Email"
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 value={email}
//                 onChange={handleEmailChange}
//                 error={!!emailError}
//                 helperText={emailError || ''}
//             />
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSaveClick}
//             >
//                 Save
//             </Button>
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleCloseModal}
//             >
//                 Cancel
//             </Button>
//         </Box>
//         // </Modal>
//     );
// };

// export default UsersModal;
