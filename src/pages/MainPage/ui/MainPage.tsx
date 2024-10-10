import React from 'react'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line impudev-fsd/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary'

const MainPage = () => {
	const { t } = useTranslation('main_page')
	return (
		<div>
			{t('Main Page')}
			<BugButton />
		</div>
	)
}

export default MainPage
