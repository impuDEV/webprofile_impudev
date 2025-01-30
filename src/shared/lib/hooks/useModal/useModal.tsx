import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

interface UseModalProps {
	onClose?: () => void
	isOpen?: boolean
	animationDelay: number
}

/**
 * Хук для модальных компонентов
 * @param animationDelay
 * @param isOpen
 * @param onClose
 * */
export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, animationDelay)
		}
	}, [animationDelay, onClose])

	return {
		isClosing,
		isMounted,
		close,
	}
}
