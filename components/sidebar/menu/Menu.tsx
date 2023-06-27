import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenuItem } from './menu.interface'
import Line from '@/components/ui/Line'
import { FC } from 'react'

interface IMenu {
	title: string
	items: IMenuItem[]
}

export const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<div className={styles.menu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map((menuItem) => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</div>
	)
}
export default Menu
