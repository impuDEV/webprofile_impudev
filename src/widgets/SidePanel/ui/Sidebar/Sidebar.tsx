import { memo, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'
import { Logo } from '@/features/Logo'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { SidebarItemType } from '../../model/types/sidebar'
import { getRouteBlog, getRouteEmployer } from '@/shared/const/router'
import { VStack } from '@/shared/ui/Stack'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
	onClose?: () => void
}

const sidebarItemsList: SidebarItemType[] = [
	{
		path: getRouteBlog(),
		text: 'blog',
	},
	{
		path: getRouteEmployer(),
		text: 'employer',
	},
]

export const Sidebar = memo((props: SidebarProps) => {
	const { onClose } = props

	const isMobile = useMobile()

	const mods: Mods = {
		[cls.drawer]: isMobile,
	}

	const navigate = useNavigate()

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem
					active={item.path === window.location.pathname}
					item={item}
					key={item.path}
					onClick={
						item.path !== window.location.pathname
							? () => {
									navigate(item.path)
									if (isMobile && onClose) onClose()
							  }
							: undefined
					}
				/>
			)),
		[isMobile, navigate, onClose],
	)

	return (
		<aside className={classNames(cls.Sidebar, mods, [])}>
			{!isMobile && <Logo big />}
			<VStack role="navigation" gap="8" className={cls.navigation}>
				{itemsList}
			</VStack>
			<div className={cls.settings}>
				<LangSwitcher />
				<ThemeSwitcher />
			</div>
		</aside>
	)
})
