import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"
import newTestimonialSlice from "../APICall/testimonials_data";
export const store = configureStore({
    reducer: {
        counter: counterReducer ,
        data: newTestimonialSlice
    }
})
// const combineReducer = combineReducers({
//     counterReducer
// })

// export const makeStore = () => {
//     configureStore({
//         reducer: combineReducer
//     })
// }
// export const wrapper = createWrapper(makeStore)