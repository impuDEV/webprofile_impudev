import { Suspense } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { AppRouter } from './providers/router'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
