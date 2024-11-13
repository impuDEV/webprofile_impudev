import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Logo.module.scss'
import { getRouteMain } from '@/shared/const/router'
import LogoBigLight from '@/shared/assets/icons/logo_big_light.svg'
import LogoBigDark from '@/shared/assets/icons/logo_big_dark.svg'
import LogoSmallLight from '@/shared/assets/icons/logo_small_light.svg'
import LogoSmallDark from '@/shared/assets/icons/logo_small_dark.svg'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

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
				theme === Theme.LIGHT ? (
					<LogoBigLight />
				) : (
					<LogoBigDark />
				)
			) : theme === Theme.LIGHT ? (
				<LogoSmallLight />
			) : (
				<LogoSmallDark />
			)}
		</div>
	)
})
