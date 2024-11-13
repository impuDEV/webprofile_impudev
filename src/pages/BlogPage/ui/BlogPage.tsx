import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { Container } from '../../../shared/ui/Container'

const BlogPage = () => {
	const { t } = useTranslation('blog_page')

	return (
		<Page>
			<div className="primary_container">
				<Container>{t('disclaimer')}</Container>
			</div>
		</Page>
	)
}

export default BlogPage
