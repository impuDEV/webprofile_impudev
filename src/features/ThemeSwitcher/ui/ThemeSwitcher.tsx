import { ButtonHTMLAttributes } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light1.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark1.svg'
import { Button, VariantButton } from '@/shared/ui/Button/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			data-testid="themeSwitcher"
			className={classNames('', {}, [className])}
			variant={VariantButton.GHOST_INVERTED}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}
