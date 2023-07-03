'use client'

import { IMenuItem } from './menu.interface'
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

export const menu: IMenuItem[] = [
	{
		title: 'Home',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Trending',
		icon: HiChartBar,
		link: '/trending'
	},
	{
		title: 'My Channel',
		icon: HiStar,
		link: '/my-channel'
	},
	{
		title: 'Subscriptions',
		icon: HiCollection,
		link: '/subscriptions'
	}
]
