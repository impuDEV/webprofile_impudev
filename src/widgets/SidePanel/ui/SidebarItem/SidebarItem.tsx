import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { SidebarItemType } from '../../model/types/sidebar'
import { Button, VariantButton } from '@/shared/ui/Button'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
	item: SidebarItemType
	active?: boolean
	onClick?: () => void
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const { item, active, onClick } = props
	const { t } = useTranslation()

	return (
		<Button
			className={active ? cls.active : cls.menuButton}
			variant={VariantButton.GHOST}
			fullWidth
			onClick={onClick}
		>
			{t(item.text)}
		</Button>
	)
})
