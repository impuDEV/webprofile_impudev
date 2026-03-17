import { useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, VariantButton } from '@/shared/ui/Button'
import MenuIcon from '@/shared/assets/icons/menu_icon.svg'
import { Logo } from '@/features/Logo'
import { ModalSidebar } from '@/features/ModalSidebar'

interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	const { className } = props
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)


	const onCloseSidebar = useCallback(() => {
		setIsSidebarOpen(false)
	}, [])

	const onShowSidebar = useCallback(() => {
		setIsSidebarOpen(true)
	}, [])

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button variant={VariantButton.GHOST} onClick={onShowSidebar}>
				<MenuIcon className={cls.menuIcon} />
			</Button>
			<ModalSidebar isOpen={isSidebarOpen} onClose={onCloseSidebar} />
			<Logo />
		</header>
	)
}
