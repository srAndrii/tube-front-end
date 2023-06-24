import { IAuthData } from './auth.helper'
import { axiosClassic } from '@/app/api/axios'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>('/auth/login', {
			email,
			password
		})
		return response.data
	},
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>('/auth/register', {
			email,
			password
		})
		return response.data
	}
}
