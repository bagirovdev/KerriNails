import { useTranslation } from 'react-i18next'
import logo from '../../assets/nails.jpg'
import sPokritiem from '../../assets/sPokritiem.jpg'
import { Link } from 'react-router'

function Services() {
	const { t } = useTranslation()
	const services = [
		{
			id: 1,
			img: sPokritiem,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 2,
			img: logo,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 2,
			img: sPokritiem,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 3,
			img: logo,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 4,
			img: logo,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 5,
			img: logo,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
		{
			id: 6,
			img: logo,
			alt: 'Педикюр с покрытием',
			title: 'Педикюр с покрытием',
			description:
				'Ухоженные стопы и идеальные ногти — педикюр с покрытием гель-лаком подарит комфорт и красоту до 4 недель.',
			pricesButton: 'Цена',
			aboutButton: 'Подробнее',
		},
	]

	return (
		<section className='mt-20 px-4'>
			<h1 className='font-bold text-2xl my-3 text-pink'>
				{t('services.title')}
			</h1>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{services.map(service => (
						<div
							key={service.id}
							className='bg-rose-800 rounded-lg overflow-hidden border border-rose-700 hover:shadow-2xl hover:shadow-rose-200 transition-all duration-300'
						>
							<div className='h-48 w-full relative'>
								<img
									className='w-full h-full object-cover'
									src={service.img}
									alt={service.alt}
								/>
							</div>

							<div className='p-6 flex flex-col gap-4'>
								<h3 className='text-xl font-bold text-white text-center'>
									{service.title}
								</h3>
								<p className='text-sm text-gray-200'>{service.description}</p>
								<div className='flex gap-3 justify-center mt-auto'>
									<Link
										to={`/service/${service.id}#prices`}
										className='px-6 py-2 bg-white text-black rounded-md hover:bg-primary hover:text-white transition-colors'
									>
										{service.pricesButton}
									</Link>
									<Link
										to={`/service/${service.id}`}
										className='px-6 py-2 bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-rose-800 transition-colors'
									>
										{service.aboutButton}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
