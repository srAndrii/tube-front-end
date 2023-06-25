import Discover from './discover/page'
import { IHome } from './home.interface'
import Catalog from '@/components/catalog/Catalog'
import { FC } from 'react'

export const HomePage: FC = () => {
	return (
		<>
			<Discover />
			<Catalog />
		</>
	)
}
export default HomePage
