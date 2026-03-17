import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Logo.module.scss'
import { getRouteMain } from '@/shared/const/router'
import LogoBig from '@/shared/assets/icons/logo_big.svg'
import LogoSmall from '@/shared/assets/icons/logo_small.svg'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface LogoProps {
	className?: string
	big?: boolean
}

export const Logo = memo((props: LogoProps) => {
	const { className, big } = props
	const { theme } = useTheme()

	const navigate = useNavigate()
	const mainRoute = getRouteMain()

	const onLogoClick = useCallback(() => {
		navigate(mainRoute)
	}, [mainRoute, navigate])

	const mods: Mods = {
		[cls.clickable]: mainRoute !== window.location.pathname,
		[cls.big]: big,
	}

	return (
		<div
			className={classNames(cls.Logo, mods, [className])}
			onClick={mainRoute === window.location.pathname ? undefined : onLogoClick}
		>
			{big ? (
				<LogoBig className={cls.logoImg} />
			) : (
				<LogoSmall className={cls.logoImg} />
			)}
		</div>
	)
})
