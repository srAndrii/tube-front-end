import { authSlice } from './auth/auth.slice'
import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const rootReducer = combineReducers({
	auth: authSlice.reducer,
	toastr: toastrReducer
})
