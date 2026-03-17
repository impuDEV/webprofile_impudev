import { memo } from 'react'
import { motion } from 'motion/react'
import { Modal } from '@/shared/ui/Modal'
import { Sidebar } from '../../widgets/SidePanel/ui/Sidebar/Sidebar'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

interface ModalSidebarProps {
	isOpen: boolean
	onClose: () => void
}

export const ModalSidebar = memo((props: ModalSidebarProps) => {
	const { isOpen, onClose } = props

	const ANIMATION_DELAY = 300

	const { close, isClosing, isMounted } = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen
	})

	return (
		<Modal
			isOpen={isOpen}
			onClose={close}
			isClosing={isClosing}
			isMounted={isMounted}
			lazy
		>
			<motion.div
				initial={{ x: isClosing ? 0 : -200, opacity: isClosing ? 1 : 0 }}
				animate={{ x: isClosing ? -200 : 0, opacity: isClosing ? 0 : 1  }}
				transition={{ duration: 0.3 }}
			>
				<Sidebar onClose={close} />
			</motion.div>
		</Modal>
	)
})
