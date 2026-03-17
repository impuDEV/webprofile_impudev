import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import github from '@/shared/assets/icons/github.svg'
import email from '@/shared/assets/icons/email.svg'
import cls from './Footer.module.scss'
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile'
import { Icon } from '@/shared/ui/Icon'

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
			<span className={cls.italic}>{t('Alexander Papernov')} &reg;
				{new Date().getFullYear()}
			</span>
			<div className={cls.contacts}>
				<a href="https://github.com/impudev" target="_blank" rel="noreferrer">
					<Icon Svg={github} />
				</a>
				<a href="mailto:impudev@gmail.com">
					<Icon Svg={email} />
				</a>
			</div>
			<span className={cls.italic}>{__PACKAGE_VER__}</span>
		</footer>
	)
})
