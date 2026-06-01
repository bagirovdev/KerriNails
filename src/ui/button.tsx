import { useEffect, useRef } from 'react'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
}

const ShimmerButton = ({
	children,
	className = '',
	...props
}: ShimmerButtonProps) => {
	const shimmerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const shimmer = shimmerRef.current
		if (!shimmer) return

		const animateShimmer = () => {
			shimmer.style.animation = 'none'
			// trigger reflow, чтобы сбросить анимацию
			void shimmer.offsetParent
			shimmer.style.animation = 'shimmer 3s ease-in-out infinite'
		}

		// Запускаем анимацию сразу
		animateShimmer()

		// Перезапускаем логику каждые 3 секунды — так анимация выглядит непрерывной
		const interval = setInterval(animateShimmer, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<button
			className={`relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
			{...props}
		>
			<div
				ref={shimmerRef}
				className='absolute inset-0  -translate-x-full bg-white opacity-30 group-hover:opacity-40'
				style={{
					width: '100%',
					height: '100%',
					transform: 'translateX(-100% )',
				}}
			/>
			<span className='relative z-10'>{children}</span>
		</button>
	)
}

export default ShimmerButton
