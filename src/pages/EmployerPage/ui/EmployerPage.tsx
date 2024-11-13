import React from 'react'
import { useTranslation } from 'react-i18next'

const EmployerPage = () => {
	const { t } = useTranslation('employer_page')
	return <div>{t('Employer Page')}</div>
}

export default EmployerPage
