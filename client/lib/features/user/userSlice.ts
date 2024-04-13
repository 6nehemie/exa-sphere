import { User } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: null,
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  description: '',
  authType: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
