import { createSlice } from '@reduxjs/toolkit';
import { createPortfolio, getPortfolios, makePayment } from '../actions/portfolio';

const initialState = {
  portfolios: [],
  new_portfolio: {},
  loading: false,
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
    [createPortfolio.fulfilled]: (state, action) => ({
      ...state,
      status: 'succrssfully purchased an asset',
      loading: false,
      new_portfolio: action.payload,
    }),
    [createPortfolio.rejected]: (state, action) => ({
      ...state,
      status: 'failed to purchased an asset Check your internet connection',
      loading: false,
      error: true,
    }),
    [createPortfolio.pending]: (state, action) => ({
      ...state,
      status: '',
      loading: true,
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
    [makePayment.pending]: (state, action) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [makePayment.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: true,
    }),

  },
});

export default portfolioSlice.reducer;
