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
        const auth = localStorage.getItem('phoenix_auth');
          return {
          ...state,
          user: JSON.parse(auth).user,
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
        localStorage.setItem('phoenix_auth', collect);

        return {
          ...state,
          logged: true,
          user: response,
          loading: false,
        };
      }else if(response.error) {
        return {
          ...state,
          loading: false,
          error: true,
          message: response.error,

        };
      }else{

  

      return {
        ...state,
        logged: true,
        error: true,
        message: response.error,
      };
    }
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
      if (response.user) {
        const collect = JSON.stringify(response);
        localStorage.setItem('phoenix_auth', collect);
        return {

          ...state,
          logged: true,
          user: response,
          loading: false,
        };
      }else if(response.error){

   
      return {
        ...state,
        logged: false,
        loading: false,
        error: true,
        message: response.error,
      };
    }else{
      return{
        ...state
      }
    }
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
