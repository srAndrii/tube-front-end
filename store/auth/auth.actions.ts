import { IAuthFields } from '@/components/header/auth-form/auth-form.interface'
import { IAuthData } from '@/service/auth/auth.helper'
import { AuthService } from '@/service/auth/auth.services'
import { toastError } from '@/utils/api.utils'
import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'
import { toastr } from 'react-redux-toastr'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Register', 'Is success')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Is success')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
