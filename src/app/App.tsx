import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'
import { Sidebar } from '@/widgets/SidePanel'
import { Footer } from '@/features/Footer'

const App = () => {
	const { theme } = useTheme()
	const isMobile = useMobile()

	return (
		<div className={classNames('app-wrapper', {}, [theme])}>
			<div className={classNames('app', {}, [theme])}>
				<Suspense fallback="">
					{isMobile && <Navbar />}
					<div className="content-page">
						{!isMobile && <Sidebar />}
						<AppRouter />
						<Footer />
					</div>
				</Suspense>
			</div>
		</div>
	)
}

export default App
