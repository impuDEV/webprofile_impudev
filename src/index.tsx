import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import App from '@/app/App'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import './shared/config/i18n/i18n'

const appContainer = document.getElementById('root')

if (!appContainer) {
	throw new Error('root container not found. Can`t inject React application')
}

const root = createRoot(appContainer)

root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
)
