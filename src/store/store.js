import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { kittenSlice } from './slices';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, kittenSlice.reducer);

export const store = configureStore({
    reducer: { kitten: persistedReducer },
    devTools: process.env.NODE_ENV != 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store);