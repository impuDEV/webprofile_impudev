import { useMediaQuery } from 'react-responsive'
import { Settings } from '@/shared/const/settings'

export const useMobile = () =>
	useMediaQuery({ maxWidth: Settings.RESPONSIVE_DESKTOP_WIDTH })
