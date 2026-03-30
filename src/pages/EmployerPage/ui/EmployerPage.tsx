import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/Container'
import { Page } from '@/widgets/Page'

const EmployerPage = () => {
	const { t } = useTranslation('employer_page')
	return (
		<Page>
			<div className="primary_container">
				<Container>{t('Employer Page')}</Container>
			</div>
		</Page>
	)
}

export default EmployerPage
