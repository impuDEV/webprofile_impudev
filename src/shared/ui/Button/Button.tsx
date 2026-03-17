import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum VariantButton {
	GHOST = 'ghost',
	GHOST_INVERTED = 'ghostInverted',
	OUTLINE = 'outline',
	NAV_PANEL = 'navPanel',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: VariantButton
	fullWidth?: boolean
	children?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		variant = VariantButton.OUTLINE,
		disabled,
		fullWidth,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[variant]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	}

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
