import { IBase } from './base.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
	email: string

	name: string

	isVerified?: boolean

	subscriberCount?: number

	description: string

	avatarPath: string

	videos?: IVideo[]

	subscriptions: ISubscription[]
}

export interface ISubscription extends IBase {
	toChanel: IUser
}
