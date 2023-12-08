import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import useSlice from './auth/user_authentication'
import usersSlice from "./users/users"
import assetSlice from "./assets/assets"
import portfolioSlice from "./portfolio/portfolio"
import walletSlice from './wallet/wallet'
import transactionSlice from './wallet/transaction'
import postSlice from "./blog/blog"
import interestSlice from "./portfolio/interest";
const rootReducer = combineReducers({
    user: useSlice,
    users: usersSlice,
    assets: assetSlice,
    portfolios: portfolioSlice,
    wallet: walletSlice,
    transactions: transactionSlice,
    blog_posts: postSlice,
    interests: interestSlice
})

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk, logger))

export default store;