import { memo } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Sidebar } from '../../widgets/SidePanel/ui/Sidebar/Sidebar'
import { Button, VariantButton } from '@/shared/ui/Button'
import cls from './ModalSidebar.module.scss'
import CloseLightIcon from '@/shared/assets/icons/close_light.svg'
import CloseDarkIcon from '@/shared/assets/icons/close_dark.svg'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

interface ModalSidebarProps {
	isOpen: boolean
	onClose: () => void
}

export const ModalSidebar = memo((props: ModalSidebarProps) => {
	const { isOpen, onClose } = props
	const { theme } = useTheme()

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Button
				className={cls.close}
				variant={VariantButton.GHOST}
				onClick={onClose}
			>
				{theme === Theme.LIGHT ? <CloseLightIcon /> : <CloseDarkIcon />}
			</Button>
			<Sidebar onClose={onClose} />
		</Modal>
	)
})
