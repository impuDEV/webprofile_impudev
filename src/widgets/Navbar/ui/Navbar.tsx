import { useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, VariantButton } from '@/shared/ui/Button'
import MenuIconLight from '@/shared/assets/icons/menu_icon_light.svg'
import MenuIconDark from '@/shared/assets/icons/menu_icon_dark.svg'
import { Logo } from '@/features/Logo'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'
import { ModalSidebar } from '@/features/ModalSidebar/ModalSidebar'

interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	const { className } = props
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

	const { theme } = useTheme()

	const onCloseSidebar = useCallback(() => {
		setIsSidebarOpen(false)
	}, [])

	const onShowSidebar = useCallback(() => {
		setIsSidebarOpen(true)
	}, [])

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button variant={VariantButton.GHOST} onClick={onShowSidebar}>
				{theme === Theme.LIGHT ? <MenuIconLight /> : <MenuIconDark />}
			</Button>
			<ModalSidebar isOpen={isSidebarOpen} onClose={onCloseSidebar} />
			<Logo />
		</header>
	)
}
