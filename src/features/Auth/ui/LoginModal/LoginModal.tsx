import { memo } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

interface LoginModalProps {
	isOpen: boolean
	onClose: () => void
}

export const LoginModal = memo((props: LoginModalProps) => {
	const { isOpen, onClose } = props

	const ANIMATION_DELAY = 300

	const { close, isClosing, isMounted } = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen,
	})

	return (
		<Modal
			isOpen={isOpen}
			onClose={close}
			isClosing={isClosing}
			isMounted={isMounted}
			lazy
		>
			<LoginForm onClose={close} />
		</Modal>
	)
})
