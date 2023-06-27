import styles from './Sidebar.module.scss'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'
import Link from 'next/link'
import { FC } from 'react'

export const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Link href='/' legacyBehavior>
				<a className={styles.logo}>Tube</a>
			</Link>

			<Menu title='Menu' items={menu} />

			<div className={styles.copy}>©2023 Tube by SrAndrii </div>
		</aside>
	)
}
export default Sidebar
