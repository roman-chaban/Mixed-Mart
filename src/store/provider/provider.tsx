'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import React, { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
