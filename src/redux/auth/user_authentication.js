import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userProfile, userSession } from '../actions/auth';

const initialState = {
  user: null,
  error: false,
  message: '',
  loading: true,
  logged: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      const response = action.payload;
  

        return {
          ...state,
          logged: true,
          user: response,
          loading: false,
        };
    
    },
    [registerUser.pending]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [registerUser.rejected]: (state) => ({
      ...state,
      message: 'No internet connection',
      loading: false,
      error: true,
    }),

    [userSession.fulfilled]: (state, action) => {
      const response = action.payload;
    
        return {

          ...state,
          logged: true,
          user: response,
          loading: false,
        };
    },
    [userSession.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [userSession.rejected]: (state) => ({
      ...state,
      message: 'No internet connection',
      loading: false,
    }),

    [userProfile.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      user: action.payload.data
    }),
    [userProfile.rejected]: (state) => ({
      ...state,
      message: 'No internet connection',
      loading: false,
    }),
    [userProfile.pending]: (state) => ({
      ...state,
      loading: true,
    }),

    
  },

});

export default userSlice.reducer;
// export const { userLog } = userSlice.actions;
