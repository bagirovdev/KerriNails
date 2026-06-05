import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import ShimmerButton from '../../ui/button'
import { useNavbar } from '../../Context/NavbarContext'

// Константы для контактов
const CONTACTS = {
	phone: '+7 (999) 248-83-79',
	address: 'Всеволожский проспект, 7',
	mapUrl:
		'https://yandex.ru/maps/org/kerii_nailss/109264447499/?display-text=kerii%20nailss&ll=30.642508%2C60.022774&mode=search&sll=30.646628%2C60.022774&sspn=0.021801%2C0.006551&text=kerii%20nailss&z=16',
}

function Header() {
	const { isNavbarOpen, setIsNavbarOpen } = useNavbar()
	const navbarRef = useRef(null)

	const handleShimmerClick = e => {
		e.stopPropagation()
		setIsNavbarOpen(false)
	}

	const handleOverlayClick = () => {
		setIsNavbarOpen(false)
	}

	// Обработка Escape
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape' && isNavbarOpen) {
				setIsNavbarOpen(false)
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isNavbarOpen, setIsNavbarOpen])

	useEffect(() => {
		if (isNavbarOpen) {
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}
		return () => document.body.classList.remove('modal-open')
	}, [isNavbarOpen])

	// Фокус на меню при открытии
	useEffect(() => {
		if (isNavbarOpen && navbarRef.current) {
			navbarRef.current.focus()
		}
	}, [isNavbarOpen])

	return (
		<>
			<header className='w-full bg-white shadow-lg relative'>
				{/* Мобильная шапка */}
				<div className='container mx-auto px-4 py-3 flex items-center justify-between md:hidden'>
					<button
						className='p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded'
						onClick={() => setIsNavbarOpen(!isNavbarOpen)}
						aria-expanded={isNavbarOpen}
						aria-label={isNavbarOpen ? 'Закрыть меню' : 'Открыть меню'}
						ref={navbarRef}
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

					<Link
						to='/home'
						className='text-xl font-bold text-pink-600 whitespace-nowrap text-center flex-grow'
						aria-label='Главная страница'
					>
						Nail Studio
					</Link>

					<div className='text-base font-medium text-gray-700'>Profile</div>
				</div>

				{/* Десктопная верхняя панель */}
				<div className='hidden md:flex mx-auto px-4 py-3 justify-between items-center max-w-screen-xl w-full'>
					{/* Левая часть: контакты */}
					<nav className='flex flex-col gap-2 md:gap-5 md:flex-row md:order-1 text-center md:text-left'>
						<a
							href={`tel:${CONTACTS.phone.replace(/\D/g, '')}`}
							className='cursor-pointer text-base sm:text-lg text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap'
						>
							{CONTACTS.phone}
						</a>
						<a
							href={CONTACTS.mapUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-xs sm:text-sm text-gray-600 hover:text-pink-600 underline whitespace-nowrap'
						>
							{CONTACTS.address}
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

					{/* Правая часть: кнопка */}
					<div className='flex flex-col items-center gap-4 md:flex-row md:order-3 md:items-center'>
						<ShimmerButton
							onClick={handleShimmerClick}
							className='w-full md:w-auto'
						>
							записаться
						</ShimmerButton>
					</div>
				</div>

				{/* Нижняя панель с иконками */}
				<div className='hidden md:flex justify-center items-center gap-8 py-4 bg-gray-50'>
					<div className='text-gray-600 text-sm'>Манкюр</div>
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
				aria-modal='true'
				role='dialog'
				aria-hidden={!isNavbarOpen}
				ref={navbarRef}
			>
				<div className='p-6 flex flex-col h-full'>
					{/* Логотип */}
					<div className='text-center mb-8'>
						<Link
							to='/home'
							className='text-3xl font-bold text-pink-600'
							onClick={() => setIsNavbarOpen(false)}
							aria-label='Главная страница, закрыть меню'
						>
							Nail Studio
						</Link>
					</div>

					{/* Контакты */}
					<div className='flex flex-col gap-4 mb-8 text-gray-700'>
						<a
							href={`tel:${CONTACTS.phone.replace(/\D/g, '')}`}
							className='text-lg hover:text-pink-600 transition-colors'
						>
							{CONTACTS.phone}
						</a>
						<a
							href={CONTACTS.mapUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='text-sm hover:text-pink-600 underline'
						>
							{CONTACTS.address}
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
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Маникюр
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Педикюр
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Дизайн
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Покрытие
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Уход
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
								Наращивание
							</div>
							<div
								className='hover:text-pink-600 cursor-pointer transition-colors'
								onClick={() => setIsNavbarOpen(false)}
								role='link'
								tabIndex={isNavbarOpen ? 0 : -1}
							>
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
					aria-hidden='true'
				/>
			)}
		</>
	)
}

export default Header
