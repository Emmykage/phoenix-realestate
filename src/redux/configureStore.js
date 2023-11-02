import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import useSlice from './auth/user_authentication'

const rootReducer = combineReducers({
    user: useSlice,
})

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))

export default store;