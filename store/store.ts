"use client"
import { rootReducer } from './root-reducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
}

const persistedReduser = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReduser,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
