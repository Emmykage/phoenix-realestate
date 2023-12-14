import { createSlice } from '@reduxjs/toolkit';
import { createPortfolio, getPortfolio, getPortfolios, makePayment, userPorfolio } from '../actions/portfolio';
// import { userPorfolio } from '../actions/users';

const initialState = {
  portfolios: [],
  new_portfolio: {},
  portfolio: {},
  loading: true,
  error: false,
  status: '',
  paid: false,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  extraReducers: {
    [getPortfolios.fulfilled]: (state, action) => ({
      ...state,
      portfolios: action.payload,
    }), 
    [getPortfolio.fulfilled]: (state, action) => {

      return {
        ...state,
        loading: false,
      portfolio: action.payload,
      }
    }, 
    [getPortfolio.rejected]: (state) => {
      return {
        ...state,
        loading: false,
      }
    },
    [getPortfolio.pending]: (state, ) => {

      return {
        ...state,
        loading: true,
   
      }
    },
    [userPorfolio.fulfilled]: (state, action) => ({
      ...state,
      portfolios: action.payload,
    }),
    [createPortfolio.fulfilled]: (state, action) => ({
      ...state,
      status: 'succrssfully purchased an asset',
      loading: false,
      error: false,
      new_portfolio: action.payload,
    }),
    [createPortfolio.rejected]: (state) => ({
      ...state,
      status: 'failed to purchased an asset Check your internet connection',
      loading: false,
      error: true,
    }),
    
    [createPortfolio.pending]: (state) => ({
      ...state,
      status: '',
      loading: true,
      error: false
    }),
    [makePayment.fulfilled]: (state, action) => {
      if (action.payload.paid) {
        return {
          ...state,
          paid: true,
          loading: false,
          error: false,
        };
      }
      return {
        ...state,
        status: '',
        paid: false,
        loading: false,
        error: true,
        message: 'something went wrong',
      };
    },
    [makePayment.pending]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [makePayment.rejected]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),

  },
});

export default portfolioSlice.reducer;
