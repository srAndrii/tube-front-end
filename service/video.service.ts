import { axiosClassic } from '../api/axios'
import { IVideo } from '../types/video.interface'

export const VideoService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>('/video')
	},

	async getMostPopular(id: number) {
		return axiosClassic.get<IVideo>(`/video/most-popular`)
	}
}
