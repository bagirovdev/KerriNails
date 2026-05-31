import { useParams } from 'react-router-dom'
import logo from '../../assets/nails.jpg'
import sPokritiem from '../../assets/sPokritiem.jpg'

// Определяем интерфейс для данных услуги
interface Service {
	id: number
	img: string
	alt: string
	title: string
	description: string
	price: string
	details: string
	pricesButton: string
	aboutButton: string
}

const servicesData: Service[] = [
	{
		id: 1,
		img: sPokritiem,
		alt: 'Педикюр с покрытием',
		title: 'Педикюр с покрытием',
		description:
			'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
		price: '2500 ₽',
		details:
			'В услугу входит обработка стоп, удаление ороговевшей кожи, покрытие гель-лаком, дизайн на одном ногте в подарок. Длительность — 1,5 часа.',
		pricesButton: 'Цена',
		aboutButton: 'Подробнее',
	},
	{
		id: 2,
		img: logo,
		alt: 'Классический педикюр',
		title: 'Классический педикюр',
		description:
			'Базовый уход за стопами с обработкой кутикулы и формированием ногтевой пластины.',
		price: '1500 ₽',
		details:
			'Включает обработку стоп пемзой, обрезку ногтей, коррекцию кутикулы. Длительность — 1 час.',
		pricesButton: 'Цена',
		aboutButton: 'Подробнее',
	},
]

function ServiceDetail() {
	const { serviceId } = useParams<{ serviceId?: string }>()
	// Явно указываем тип для service — может быть Service или undefined
	const service = serviceId
		? servicesData.find(s => s.id === parseInt(serviceId, 10))
		: undefined

	if (!service) {
		return (
			<div
				className='flex justify-center items-center min-h-screen bg-[#eae7dc]'
				style={{ color: 'var(--color-dark)' }}
			>
				<p className='text-xl font-medium'>Услуга не найдена</p>
			</div>
		)
	}

	return (
		<div
			className='min-h-screen bg-[#eae7dc] py-8 px-4'
			style={{ color: 'var(--color-dark)' }}
		>
			<div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden'>
				{/* Изображение */}
				<div className='relative h-64 bg-[#d8c3a5] flex justify-center items-center'>
					{service.img ? (
						<img
							src={service.img}
							alt={service.alt}
							className='h-full w-full object-cover'
						/>
					) : (
						<span className='text-[#8e8d8a] text-xl'>
							Изображение отсутствует
						</span>
					)}
				</div>

				{/* Контент */}
				<div className='p-8'>
					<h1
						className='font-bold text-3xl mb-4'
						style={{ color: 'var(--color-pink)' }}
					>
						{service.title}
					</h1>

					<p className='text-[#8e8d8a] text-lg mb-6 leading-relaxed'>
						{service.description}
					</p>

					{/* Блок цены */}
					<section className='mb-8'>
						<h2
							className='text-2xl font-semibold mb-3'
							style={{ color: 'var(--color-dark)' }}
						>
							{service.pricesButton}
						</h2>
						<div
							className='inline-block px-6 py-3 rounded-full font-bold text-2xl'
							style={{
								backgroundColor: 'var(--color-primary)',
								color: 'var(--color-dark)',
							}}
						>
							{service.price}
						</div>
					</section>

					{/* Блок «Подробнее об услуге» */}
					<section>
						<h2
							className='text-2xl font-semibold mb-3'
							style={{ color: 'var(--color-dark)' }}
						>
							{service.aboutButton}
						</h2>
						<p className='text-[#8e8d8a] leading-relaxed text-base'>
							{service.details}
						</p>
					</section>

					{/* Кнопка для действия */}
					<div className='mt-8'>
						<button
							className='px-8 py-3 rounded-lg font-medium transition-all duration-300'
							style={{
								backgroundColor: 'var(--color-pink)',
								color: 'white',
								boxShadow: '0 4px 6px rgba(216, 71, 142, 0.3)',
							}}
							onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
								const element = e.currentTarget
								element.style.boxShadow = '0 6px 8px rgba(216, 71, 142, 0.4)'
							}}
							onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
								const element = e.currentTarget
								element.style.boxShadow = '0 4px 6px rgba(216, 71, 142, 0.3)'
							}}
						>
							Записаться на услугу
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceDetail
