import { memo } from 'react'
import cls from './LoginForm.module.scss'
import { Button } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LoginFormProps {
	onClose: () => void
}

export const LoginForm = memo((props: LoginFormProps) => {
	const { onClose } = props

	return (
		<div className={classNames(cls.LoginForm, {}, [])}>
			<Button onClick={onClose}>\/</Button>
			<span>123</span>
			<span>321</span>
		</div>
	)
})
