import { createSlice } from '@reduxjs/toolkit';

const getInitialSidebarState = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('sidebar') === 'open';
  }
  return false;
};

const initialState = {
  isOpen: getInitialSidebarState(),
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
