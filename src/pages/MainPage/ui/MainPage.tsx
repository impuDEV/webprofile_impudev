import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'
import { Page } from '@/widgets/Page'
import { Container } from '@/shared/ui/Container'
import { LoginModal } from '@/features/Auth'
import { Button } from '@/shared/ui/Button'

const MainPage = () => {
	const { t } = useTranslation('main_page')

	const [pos, setPos] = useState({ x: 0, y: 0 })

	const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const mouseMoveHandler = (event: { clientX: any; clientY: any }) => {
		setPos({
			x: event.clientX,
			y: event.clientY
		})
	}

	useEffect(() => {
		window.addEventListener('mousemove', mouseMoveHandler)

		return () => {
			window.removeEventListener('mousemove', mouseMoveHandler)
		}


	}, [])

	return (
		<Page>
			<Container>
				<h1>
					{t('Добро пожаловать!')} <br />
					{t('Вы заглянули в персональный уголок разработчика impuDEV.')}
				</h1>
			</Container>
			<Container>
				{t('Этот ресурс создаётся для систематизации накопленных навыков' +
					' в разработке програмного обеспечения, закрепления навыков' +
					' на практике и демонстрации моих компетенций потенциальному' +
					' работодателю.')}
			</Container>
			<Container>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<pre>Mouse position: {pos.x}, {pos.y}</pre>
			</Container>
			{/* <Button onClick={onShowModal}>Modal</Button> */}
			{/* <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> */}
		</Page>
	)
}

export default MainPage
