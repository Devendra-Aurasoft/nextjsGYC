// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import apiCall from "../utils/apiCall";
// // freeze function for dynamic state changes
// const STATUS = Object.freeze({
//     LOADING: 'loding',
//     DONE: "done",
//     ERROR: "error"
// })


// // initialState Object
// const initialState = {
//     data: [],
//     status: STATUS.DONE
// }


// //  Slice function for testimonials data passing 
// const testimonialSlice = createSlice({
//     name: "Testimonial",
//     initialState,
//     reducers: {
//         setTestimonialsData(state, action) {
//             state.data = action.payload
//         },
//         setStatus(state, action) {
//             state.status = action.payload
//         }
//     }
// })


// // export testimonnial actions(reduser)
// export const { setTestimonialsData } = testimonialSlice.actions;

// //  exporting testimonialSlice reduser as default 
// export default testimonialSlice.reducer


// //  Createing Thunk Middleware function for API call 
export const fratchTestimonial = createAsyncThunk('', () => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`).then(response => response.data)
})

// export function fetchTestimonial() {
//     return async function fetchTestimonialThunks(dispatch, getState) {
//         dispatch.setStatus(STATUS.LOADING)
//         try {
//             const response = apiCall("get_testimonials.php", "get")
//             dispatch.setTestimonialsData(response)
//             dispatch.setStatus(STATUS.DONE)
//         } catch (error) {
//             console.log(err);
//             dispatch.setStatus(STATUS.DONE)
//         }
//     }
// }





// AD Sir Code
// const createSlice = require('@reduxjs/toolkit').createSlice;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
// const axios = require('axios');
import axios from 'axios';
const initialState = {
    isLodding: false,
    users: [],
    error: ''
}

// Generate pending, fulfill and rejected action types 
// const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//     return axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             return response.data.map(user => user.id)
//         })
// })
export const fetchUsers = createAsyncThunk('testimonials/list', async() => {
    console.log('I am colled : - ', new Date().toISOString());
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_testimonials.php`)
        .then(response => {
            return response.data;
        })
})

const newTestimonialSlice = createSlice({
    name: 'testimonials',
    initialState: initialState,
    extraReducers: (builder) => {
        // builder.addCase(fetchUsers.pending, state => {
        //     state.isLodding = true;
        // })
        // builder.addCase(fetchUsers.fulfilled, (state, action) => {
        //     state.users = action.payload;
        //     state.isLodding = false;
        //     state.error = '';
        // })
        // builder.addCase(fetchUsers.rejected, (state, action) => {
        //     state.error = action.error.message;
        //     state.users = [];
        //     state.isLodding = false;
        // })
    }
});

// module.exports = userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;

export default newTestimonialSlice.reducer;
// module.exports.fetchUsers = fetchUsers;