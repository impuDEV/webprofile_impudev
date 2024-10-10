import { ButtonHTMLAttributes, FC } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum VariantButton {
	GHOST = 'ghost',
	GHOST_INVERTED = 'ghostInverted',
	OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: VariantButton
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		variant = VariantButton.OUTLINE,
		...otherProps
	} = props

	const mods: Mods = {
		[cls[variant]]: true,
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
