import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkVariant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkProps extends LinkProps {
	className?: string
	variant?: AppLinkVariant
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, variant])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
