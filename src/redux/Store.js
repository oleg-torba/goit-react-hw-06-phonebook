import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterSlice } from './FilterSlice';
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './ContactsSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'phones',
  storage,
  whitelist: ['contacts']
};

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: {
    contacts: persistedContactsReducer,
  },
});

export const persistor = persistStore(store);
