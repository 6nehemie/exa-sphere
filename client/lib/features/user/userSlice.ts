import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: null,
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  isVerified: false,
  description: '',
  authType: '',
  address: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
