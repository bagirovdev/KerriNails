import { useState, useEffect } from 'react'
import photo from '../../assets/nails.jpg'

const services = [
	{
		id: 1,
		name: 'Классический маникюр',
		description:
			'Обработка кутикулы, придание формы ногтям, покрытие базовым лаком',
		price: '1500 ₽',
		category: 'Базовый уход',
		image: photo,
	},
	{
		id: 2,
		name: 'Маникюр с покрытием гель-лак',
		description: 'Полная обработка + стойкое покрытие гель-лаком',
		price: '2500 ₽',
		category: 'Покрытие',
		image: photo,
	},
	{
		id: 3,
		name: 'Дизайн ногтей',
		description: 'Индивидуальный дизайн на 10 ногтях',
		price: '800 ₽',
		category: 'Дизайн',
		image: photo,
	},
	{
		id: 4,
		name: 'Снятие старого покрытия',
		description:
			'Аккуратное снятие гель-лака без повреждения ногтевой пластины',
		price: '500 ₽',
		category: 'Дополнительно',
		image: photo,
	},
	{
		id: 5,
		name: 'Укрепление ногтей',
		description: 'Использование акриловой пудры или геля для укрепления',
		price: '1200 ₽',
		category: 'Уход',
		image: photo,
	},
	{
		id: 6,
		name: 'Спа-уход для рук',
		description: 'Пилинг, маска и массаж рук для глубокого увлажнения',
		price: '1800 ₽',
		category: 'Уход',
		image: photo,
	},
	{
		id: 7,
		name: 'Экспресс-маникюр',
		description: 'Быстрый маникюр без покрытия для идеального вида за 30 минут',
		price: '1000 ₽',
		category: 'Базовый уход',
		image: photo,
	},
	{
		id: 8,
		name: 'Французский маникюр',
		description: 'Элегантное классическое оформление ногтей с белым кончиком',
		price: '2800 ₽',
		category: 'Покрытие',
		image: photo,
	},
	{
		id: 9,
		name: 'Наращивание ногтей',
		description: 'Моделирование длины и формы с использованием геля',
		price: '3500 ₽',
		category: 'Наращивание',
		image: photo,
	},
	{
		id: 10,
		name: 'Коррекция наращенных ногтей',
		description: 'Обновление линии роста и коррекция формы',
		price: '2000 ₽',
		category: 'Наращивание',
		image: photo,
	},
]

const Prices = () => {
	const [visibleItems, setVisibleItems] = useState<number[]>([])

	useEffect(() => {
		services.forEach((_, index) => {
			setTimeout(() => {
				setVisibleItems(prev => [...prev, index])
			}, 150 * index)
		})
	}, [])

	return (
		<div className='bg-second min-h-screen py-12 px-4'>
			<div className='max-w-6xl mx-auto'>
				{/* Заголовок с анимацией */}
				<h1 className='text-4xl md:text-5xl font-bold text-center text-dark mb-4 opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_forwards]'>
					Прайс-лист
				</h1>
				<p className='text-lg text-center text-main mb-12 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards]'>
					Наши услуги и цены. Запишитесь на сеанс и получите идеальный маникюр!
				</p>

				{/* Категории и карточки */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={service.id}
							className={`bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden transform opacity-0 ${
								visibleItems.includes(index)
									? 'animate-[fadeInScale_0.6s_ease-in-out_forwards]'
									: ''
							}`}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{/* Фото услуги */}
							<div className='relative h-48 mb-4 rounded-xl overflow-hidden shadow-md'>
								<img
									src={service.image}
									alt={`Фото услуги: ${service.name}`}
									className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
								/>
								{/* Декоративный элемент поверх фото */}
								<div className='absolute top-0 right-0 w-16 h-20 bg-pink rounded-bl-full transform translate-y-[-50%] translate-x-[50%] opacity-75'></div>
							</div>

							{/* Контент карточки */}
							<div className='relative z-10'>
								<span className='inline-block px-3 py-1 bg-primary text-dark text-sm font-medium rounded-full mb-3'>
									{service.category}
								</span>
								<h3 className='text-xl font-semibold text-dark mb-2'>
									{service.name}
								</h3>
								<p className='text-main text-sm mb-4 leading-relaxed'>
									{service.description}
								</p>
								<div className='flex items-center justify-between'>
									<span className='text-2xl font-bold text-pink'>
										{service.price}
									</span>
									<button className='bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2'>
										Записаться
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Prices
