import { Link } from 'react-router-dom'
import { useState } from 'react'
import ShimmerButton from '../../ui/button'

function Header() {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)

	const handleShimmerClick = e => {
		e.stopPropagation()
		console.log('ShimmerButton clicked')
		setIsNavbarOpen(false) // закрываем navbar после нажатия на кнопку записи
	}

	const handleOverlayClick = () => {
		setIsNavbarOpen(false)
	}

	return (
		<>
			<header className='w-full bg-white shadow-lg relative'>
				{/* Мобильная шапка: mobile-first (toggle слева, логотип по центру, Profile справа) */}
				<div className='container mx-auto px-4 py-3 flex items-center justify-between md:hidden'>
					{/* Кнопка-переключатель слева */}
					<button
						className='p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded'
						onClick={() => setIsNavbarOpen(!isNavbarOpen)}
						aria-expanded={isNavbarOpen}
						aria-label={isNavbarOpen ? 'Закрыть меню' : 'Открыть меню'}
					>
						<span className='sr-only'>Меню</span>
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

					{/* Логотип по центру */}
					<Link
						to='/home'
						className='text-xl font-bold text-pink-600 whitespace-nowrap text-center flex-grow'
						aria-label='Главная страница'
					>
						Nail Studio
					</Link>

					{/* Profile справа */}
					<div className='text-base font-medium text-gray-700'>Profile</div>
				</div>

				{/* Десктопная верхняя панель: контакты, логотип, кнопка */}
				<div className='hidden md:flex mx-auto px-4 py-3 justify-between items-center max-w-screen-xl w-full'>
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
					<div className='flex flex-col items-center gap-4 md:flex-row md:order-3 md:items-center '>
						<ShimmerButton
							onClick={handleShimmerClick}
							className='w-full md:w-auto'
						>
							записаться
						</ShimmerButton>
					</div>
				</div>

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

			{/* Боковой navbar для мобильных устройств */}
			<div
				className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
					isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='p-6 flex flex-col h-full'>
					{/* Логотип */}
					<div className='text-center mb-8'>
						<Link
							to='/home'
							className='text-3xl font-bold text-pink-600'
							onClick={() => setIsNavbarOpen(false)}
						>
							Nail Studio
						</Link>
					</div>

					{/* Контакты */}
					<div className='flex flex-col gap-4 mb-8 text-gray-700'>
						<a
							href='tel:+79992488379'
							className='text-lg hover:text-pink-600 transition-colors'
						>
							+7 (999) 248-83-79
						</a>
						<a
							href='https://yandex.ru/maps/org/kerii_nailss/109264447499/?display-text=kerii%20nailss&ll=30.642508%2C60.022774&mode=search&sll=30.646628%2C60.022774&sspn=0.021801%2C0.006551&text=kerii%20nailss&z=16'
							target='_blank'
							rel='noopener noreferrer'
							className='text-sm hover:text-pink-600 underline'
						>
								Всеволожский проспект, 7
						</a>
					</div>

					{/* Кнопка записи */}
					<ShimmerButton
						onClick={handleShimmerClick}
						className='w-full py-3 text-lg mb-8'
					>
						записаться на процедуру
					</ShimmerButton>

					{/* Список услуг */}
					<div className='flex flex-col gap-4 flex-grow'>
						<div className='text-gray-600 text-lg font-medium'>Услуги:</div>
						<div className='flex flex-col gap-3 text-gray-700'>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Маникюр
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Педикюр
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Дизайн
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Покрытие
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Уход
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Наращивание
							</div>
							<div className='hover:text-pink-600 cursor-pointer transition-colors'>
								Коррекция
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Затемняющий оверлей при открытом navbar */}
			{isNavbarOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
					onClick={handleOverlayClick}
				/>
			)}
		</>
	)
}

export default Header
