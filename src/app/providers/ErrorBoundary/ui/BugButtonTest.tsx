import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, VariantButton } from '@/shared/ui/Button'

// for test ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false)
	const { t } = useTranslation()
	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	return (
		<Button variant={VariantButton.OUTLINE} onClick={onThrow}>
			{t('Generate error')}
		</Button>
	)
}
