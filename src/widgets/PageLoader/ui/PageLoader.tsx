import { memo } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader'
import cls from './PageLoader.module.scss'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
	const mobile = useMobile()

	const mods: Mods = {
		[cls.desktop]: !mobile,
	}

	return (
		<div className={classNames(cls.PageLoader, mods, [className])}>
			<Loader />
		</div>
	)
})
