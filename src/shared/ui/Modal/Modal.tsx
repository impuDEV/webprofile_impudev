import { Dialog, DialogPanel } from '@headlessui/react'
import { ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose: () => void
	isClosing: boolean
	lazy?: boolean
	isMounted: boolean
}

/**
 * Модальный компонент
 * @param props isOpen - флаг открытой модалки, onClose - колбэк с задержкой под анимацию, isClosing - флаг анимации закрытия, lazy - флаг динамической подгрузки, isMounted - флаг завершения вывода
 * */
export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		isClosing,
		lazy,
		isMounted
	} = props

	const { theme } = useTheme()

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Dialog open={isOpen} onClose={onClose}>
			<div
				className={classNames(cls.Modal, {}, [className, theme, 'app_modal'])}
			>
				<DialogPanel>
					{children}
				</DialogPanel>
			</div>
		</Dialog>
	)
}
