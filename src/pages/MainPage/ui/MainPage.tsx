import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { Container } from '@/shared/ui/Container'

const MainPage = () => {
	const { t } = useTranslation('main_page')

	return (
		<Page>
			<div className="primary_container">
				<Container>
					<h1>
						{t('Добро пожаловать!')} <br />{' '}
						{t('Вы заглянули в персональный уголок WEB разработчика impuDEV.')}
					</h1>
				</Container>
			</div>
		</Page>
	)
}

export default MainPage
