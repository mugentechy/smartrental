import { createAsyncThunk } from '@reduxjs/toolkit'
import { authUser, getCurrentUser,getSubscribe,getContactAsync } from './userApi'
import Cookies from 'js-cookie'



export const contactAsync = createAsyncThunk(
    '/contact',
    async ({ fname,lname,email,phone, message }, {rejectWithValue }) => {
        try {
            const response = await getContactAsync(fname,lname,email,phone, message);
            return response;

        } catch(error) {
            if (error.response && error.response.message) {
                return rejectWithValue(error.response.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);



export const getSubscribeAsync = createAsyncThunk(
    '/subscribe',
    async ({ email }, {rejectWithValue }) => {
        try {
            const response = await getSubscribe(email);
            return response;

        } catch(error) {
            if (error.response && error.response.message) {
                return rejectWithValue(error.response.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);




export const authUserAsync = createAsyncThunk(
    '/login',
    async ({ email, password }, {rejectWithValue }) => {
        try {
            const response = await authUser(email,password);
            Cookies.set('token', response.token)
            console.log(response)
            return response;

        } catch(error) {
            if (error.response && error.response.message) {
                return rejectWithValue(error.response.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const getCurrentUserAsync = createAsyncThunk(
    '/user',
    async ( id , {rejectWithValue }) => {
        try {
            const response = await getCurrentUser(id);
            return response;
        } catch(error) {
            if (error.response && error.response.message) {
                return rejectWithValue(error.response.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);