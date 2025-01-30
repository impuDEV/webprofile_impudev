import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Example.module.scss'

interface ExampleProps {
	className?: string
}

export const Example = memo((props: ExampleProps) => {
	const { className } = props
	const { t } = useTranslation()
	const [show, setShow] = useState(true)

	return (
		<div className={classNames(cls.Example, {}, [className])}>
			<div className={cls.controls}>
				<motion.button
					className={cls.trigger}
					whileTap={{ scale: 0.95 }}
					onClick={() => setShow(!show)}
				>
					{show ? 'Remove' : 'Add'}
				</motion.button>
			</div>

			<AnimatePresence>
				{show ? (
					<motion.div
						className={cls.box}
						exit={{ opacity: 0, scale: 1.1 }}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
					/>
				) : null}
			</AnimatePresence>
		</div>
	)
})
