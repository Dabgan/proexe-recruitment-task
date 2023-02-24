import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await fetch(
        'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'
    );
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
    return data;
});

export const fetchAddUser = createAsyncThunk(
    'user/addUser',
    async (newUser) => {
        const response = await fetch(
            'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    }
);

export const fetchEditUser = createAsyncThunk(
    'user/editUser',
    async (userId, updatedInfo) => {
        const response = await fetch(
            `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ updatedInfo }),
            }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    }
);

export const fetchDeleteUser = createAsyncThunk(
    'user/deleteUser',
    async (userId) => {
        const response = await fetch(
            `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${userId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchAddUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAddUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users.push(action.payload);
                state.error = null;
            })
            .addCase(fetchAddUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchEditUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchEditUser.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log('co tu robic');
            })
            .addCase(fetchEditUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchDeleteUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = state.users.filter(
                    (user) => user.id !== action.payload.id
                );
                console.log(state.users);
            })
            .addCase(fetchDeleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

// export const {} = usersSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default usersSlice.reducer;
