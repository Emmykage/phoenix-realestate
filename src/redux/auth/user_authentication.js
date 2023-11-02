import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userSession } from '../actions/auth';

const initialState = {
  user: null,
  error: false,
  message: '',
  loading: false,
  logged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLog: (state) => {
      try {
        const auth = localStorage.getItem('edge_auth');
        return {
          ...state,
          user: JSON.parse(auth),
        };
      } catch {
        return {
          ...state,
          user: null,
        };
      }
    },

  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      const response = action.payload;
      if (response.user) {
        const collect = JSON.stringify(response);
        localStorage.setItem('edge_auth', collect);

        return {

          ...state,
          logged: true,
          user: response,
          loading: false,
        };
      }
      if (response.error) {
        return {
          ...state,
          loading: false,
          error: true,
          message: 'Enter a valid email',

        };
      }

      return {
        ...state,
        logged: true,
        error: true,
        message: response.error,
      };
    },
    [registerUser.pending]: (state, action) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [registerUser.rejected]: (state, action) => ({
      ...state,
      message: 'No internet connection',
      loading: false,
      error: true,
    }),

    [userSession.fulfilled]: (state, action) => {
      const response = action.payload;
      if (response.user) {
        const collect = JSON.stringify(response);
        localStorage.setItem('edge_auth', collect);
        return {

          ...state,
          logged: true,
          user: response,
          loading: false,
        };
      }
      return {
        ...state,
        logged: false,
        loading: false,
        error: true,
        message: response.error,
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
  },

});

export default userSlice.reducer;
export const { userLog } = userSlice.actions;
