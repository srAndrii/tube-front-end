'use client'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth()
	const pathname = usePathname()

	if (item.link === '/my-channel')
		if (!user) return null
		else item.link = `/c/${user?.id}`

	return (
		<li>
			<Link href={item.link} legacyBehavior>
				<a className={pathname === item.link ? styles.active : ''}>
					<span className={item.image ? styles.image : ''}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image
								src={item.image}
								width={40}
								height={40}
								alt={item.title}
							/>
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	)
}
export default MenuItem
