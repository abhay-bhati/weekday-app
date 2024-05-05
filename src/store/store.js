import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import reducers, { getMiddleWare } from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getMiddleWare
});


const persistor = persistStore(store);
setupListeners(store.dispatch);

export default function AppProvider({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.__STORE__ = store;
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}