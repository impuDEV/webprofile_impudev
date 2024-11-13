import { Dialog } from '@headlessui/react'
import { ReactNode } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props

	const { theme } = useTheme()

	const mods: Mods = {
		[cls.opened]: isOpen,
	}

	return (
		<Dialog open={isOpen} onClose={onClose}>
			<div
				className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
			>
				<Dialog.Panel>{children}</Dialog.Panel>
			</div>
		</Dialog>
	)
}
