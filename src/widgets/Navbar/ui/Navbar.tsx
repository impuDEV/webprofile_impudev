import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { useMobile } from '@/shared/lib/hooks/useDesktop/useDesktop'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	const { className } = props

	const { t } = useTranslation()

	const isMobile = useMobile()

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				{isMobile ? (
					<ThemeSwitcher />
				) : (
					<>
						<ThemeSwitcher />
						<LangSwitcher className={cls.lang} />
					</>
				)}
			</div>
			<div className={cls.links}>
				<AppLink
					variant={AppLinkVariant.SECONDARY}
					to="/"
					className={cls.mainLink}
				>
					{t('Home')}
				</AppLink>
				<AppLink variant={AppLinkVariant.RED} to="/about">
					{t('About')}
				</AppLink>
			</div>
		</header>
	)
}
