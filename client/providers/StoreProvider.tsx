'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { setUser } from '@/lib/features/user/userSlice';
import { User } from '@/types';

export default function StoreProvider({
  user,
  children,
}: {
  user?: User;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    // and create initial state
    storeRef.current = makeStore();

    if (user) {
      storeRef.current.dispatch(setUser(user));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
