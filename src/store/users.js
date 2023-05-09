import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', // target slice,
    async(obj, { rejectWithValue, fulfillWithValue})=>{ // 1st arg is obj -> whatever we pass while dispatching this action , thunkAPi (2nd argument) 
        try {
        const res = await  axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.data)
        //  return fulfillWithValue('something else')
        return res;
       } catch(err) {
        return rejectWithValue('invalid user')

       }
    }
);
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: [],
        test: false,
        loading: false

    },
    reducers: {
        setType: (state, actions) => {
            state.type = actions.payload || 'Guest'
        },
        testAsyncDispatch:(state) => {
            state.test = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            console.log("pending")
        })
        .addCase(fetchUsers.fulfilled, (state, actions) => {
            console.log("fulfilled");
            state.loading = false;
            state.users = actions.payload;

        })
        .addCase(fetchUsers.rejected, (state, actions) => {
            console.log("rejected", actions.payload)
        })
    }
});


export const { setType, getUsers, testAsyncDispatch } = userSlice.actions;
export default userSlice.reducer;
