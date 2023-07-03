import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'
import { FC } from 'react'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}
export default Header
