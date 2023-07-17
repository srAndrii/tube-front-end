'use client'

import { persistor, store } from './store'
import NextProgressBar from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NextProgressBar
				color='#FF7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					{children}
					<ReduxToastrLib
						newestOnTop={false}
						preventDuplicates
						progressBar
						closeOnToastrClick
						timeOut={4000}
						transitionIn='fadeIn'
						transitionOut='fadeOut'
					/>
				</PersistGate>
			</Provider>
		</>
	)
}
