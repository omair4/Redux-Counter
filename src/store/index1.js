// import { createStore } from "redux";
import {configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth";
// import counterSlice from "./counter";
import counterReducer from './counter'
import authReducer from './auth'


const store = configureStore({
  reducer: {
    // counter:counterSlice.reducer,
    // auth:authSlice.reducer
        counter: counterReducer,
        auth:authReducer
  },
});


export default store;

// const counterReducer = (state = { counter: 0 }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//         };
//     }
//     if (action.type === 'decrement') {
//         console.log("decrement");
//         return {
//             counter: state.counter - 1,
//         };
//     }
//     if (action.type === "increase") {
//         console.log(typeof action.amount);
//         if (!action.amount)
//             return {
//               counter: state.counter,
//             };
//       return {
//         counter: state.counter + parseInt(action.amount),
//       };
//     }
//     return state;
//  }

// const store = createStore(counterReducer);
