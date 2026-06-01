import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ShimmerButton from '../../ui/button'

function Header() {
	const [isIconsMenuOpen, setIsIconsMenuOpen] = useState(false)
	const { t } = useTranslation()

	const handleShimmerClick = e => {
		e.stopPropagation()
		console.log('ShimmerButton clicked')
	}

	return (
		<header className='w-full bg-white shadow-lg flex flex-col relative'>
			{/* Верхняя панель: контакты, логотип, кнопка */}
			<div className='container mx-auto px-4 py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6'>
				{/* Левая часть: контакты */}
				<nav className='flex flex-col gap-2 md:gap-5 md:flex-row md:order-1 text-center md:text-left'>
					<a
						href='tel:+79992488379'
						className='cursor-pointer text-base sm:text-lg text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap'
					>
						+7 (999) 248-83-79
					</a>
					<a
						href='https://yandex.ru/maps/org/kerii_nailss/109264447499/?display-text=kerii%20nailss&ll=30.642508%2C60.022774&mode=search&sll=30.646628%2C60.022774&sspn=0.021801%2C0.006551&text=kerii%20nailss&z=16'
						target='_blank'
						rel='noopener noreferrer'
						className='text-xs sm:text-sm text-gray-600 hover:text-pink-600 underline whitespace-nowrap'
					>
						Всеволожский проспект, 7
					</a>
				</nav>

				{/* Центр: логотип */}
				<div className='order-1 md:order-2 text-center'>
					<Link
						to='/home'
						className='text-xl sm:text-2xl font-bold text-pink-600 whitespace-nowrap'
						aria-label='Главная страница'
					>
						Nail Studio
					</Link>
				</div>

				{/* Правая часть: кнопка и бургер */}
				<div className='flex flex-col items-center gap-4 md:flex-row md:order-3 md:items-center'>
					<ShimmerButton
						onClick={handleShimmerClick}
						className='w-full md:w-auto'
					>
						записаться
					</ShimmerButton>

					{/* Кнопка для открытия меню иконок */}
					<button
						className='md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded'
						onClick={() => setIsIconsMenuOpen(!isIconsMenuOpen)}
						aria-expanded={isIconsMenuOpen}
						aria-label={isIconsMenuOpen ? 'Скрыть иконки' : 'Показать иконки'}
					>
						<span className='sr-only'>Иконки</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6 text-gray-600'
						>
							<path
								fillRule='evenodd'
								d='M3.75 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Меню иконок для мобильных устройств */}
			{isIconsMenuOpen && (
				<div className='md:hidden bg-gray-50 py-4 px-4'>
					<div className='flex justify-center items-center flex-wrap gap-6'>
						<div className='text-gray-600 text-sm'>Маникюр</div>
						<div className='text-gray-600 text-sm'>Педикюр</div>
						<div className='text-gray-600 text-sm'>Дизайн</div>
						<div className='text-gray-600 text-sm'>Покрытие</div>
						<div className='text-gray-600 text-sm'>Уход</div>
						<div className='text-gray-600 text-sm'>Наращивание</div>
						<div className='text-gray-600 text-sm'>Коррекция</div>
					</div>
				</div>
			)}

			{/* Нижняя панель с иконками (только для десктопа) */}
			<div className='hidden md:flex justify-center items-center gap-8 py-4 bg-gray-50'>
				<div className='text-gray-600 text-sm'>Маникюр</div>
				<div className='text-gray-600 text-sm'>Педикюр</div>
				<div className='text-gray-600 text-sm'>Дизайн</div>
				<div className='text-gray-600 text-sm'>Покрытие</div>
				<div className='text-gray-600 text-sm'>Уход</div>
				<div className='text-gray-600 text-sm'>Наращивание</div>
				<div className='text-gray-600 text-sm'>Коррекция</div>
			</div>
		</header>
	)
}

export default Header
