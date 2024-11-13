import { memo, ReactNode } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'

interface PageProps {
	className?: string
	children: ReactNode
}

export const Page = memo((props: PageProps) => {
	const { className, children } = props

	const isMobile = useMobile()

	const mods: Mods = {
		[cls.mobile]: isMobile,
	}

	return (
		<main className={classNames(cls.Page, mods, [className])}>{children}</main>
	)
})
