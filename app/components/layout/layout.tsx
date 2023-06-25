import styles from './Layout.module.scss'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

export default function Layout(
	{ children }: { children: React.ReactNode },
	title: string
) {
	return (
		<>
			<Head>{title}</Head>
			<main className={styles.main}>
				<Sidebar />
				<section className={styles.content}>
					<Header />
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</>
	)
}
