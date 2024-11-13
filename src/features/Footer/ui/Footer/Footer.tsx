import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Footer.module.scss'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'

interface FooterProps {
	className?: string
}

export const Footer = memo((props: FooterProps) => {
	const { className } = props
	const { t } = useTranslation()

	const isMobile = useMobile()

	const mods: Mods = {
		[cls.mobile]: isMobile,
	}

	return (
		<footer className={classNames(cls.Footer, mods, [className])}>
			<span>
				<span className={cls.italic}>{t('Alexander Papernov')}</span>&reg;{' '}
				{new Date().getFullYear()}
			</span>
			<span className={cls.italic}>{__PACKAGE_VER__}</span>
		</footer>
	)
})
