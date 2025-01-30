import { useTranslation } from 'react-i18next'
// eslint-disable-next-line impudev-fsd/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary'
import { Example } from '@/widgets/Example'
import { Counter } from '@/entities/Counter'

const MainPage = () => {
	const { t } = useTranslation('main_page')

	return (
		<div>
			{t('Main Page')}
			<Counter />
			<BugButton />
			<Example />
		</div>
	)
}

export default MainPage
