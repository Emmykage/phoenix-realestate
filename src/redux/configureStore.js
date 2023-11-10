import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import useSlice from './auth/user_authentication'
import usersSlice from "./users/users"
import assetSlice from "./assets/assets"
import portfolioSlice from "./portfolio/portfolio"
import walletSlice from './wallet/wallet'

const rootReducer = combineReducers({
    user: useSlice,
    users: usersSlice,
    assets: assetSlice,
    portfolios: portfolioSlice,
    wallet: walletSlice
})

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))

export default store;