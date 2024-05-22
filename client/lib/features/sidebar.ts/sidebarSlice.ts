import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: localStorage.getItem('sidebar') === 'open' ? true : false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
      localStorage.setItem('sidebar', state.isOpen ? 'open' : 'closed');
    },
    openSidebar: (state) => {
      state.isOpen = true;
      localStorage.setItem('sidebar', 'open');
    },
    closeSidebar: (state) => {
      state.isOpen = false;
      localStorage.setItem('sidebar', 'closed');
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
