import { PiPhoneCallFill } from 'react-icons/pi'
import { CiMail } from 'react-icons/ci'
import { FaCommentDots } from 'react-icons/fa'
import { useState } from 'react'
import CallForm from '../forms/CallForm'
import EmailForm from '../forms/EmailForm'
import ReviewForm from '../forms/ReviewForm'

type ActiveFormType = 'call' | 'email' | 'chat' | null

function BookingForm() {
	const [activeForm, setActiveForm] = useState<ActiveFormType>(null)

	const closeForm = (): void => setActiveForm(null)

	return (
		<div className='fixed right-0 z-10 top-0 bottom-0 w-full'>
			{/* Панель иконок — всегда видна */}
			<div
				className={`
          flex flex-col justify-center gap-4 sm:gap-5 h-48 sm:h-56 z-30 w-14 sm:w-15 items-center
          fixed top-1/2 right-0 -translate-y-1/2
          duration-700 ease-in-out
          ${activeForm ? '-translate-x-96 sm:-translate-x-95' : 'translate-x-0'}
          bg-red-100 rounded-l-lg shadow-lg
        `}
			>
				<div
					className={`cursor-pointer p-2 sm:p-3 ${activeForm === 'call' ? 'bg-red-200 rounded-2xl' : ''}`}
					title='Заказать звонок'
					onClick={() => setActiveForm('call')}
				>
					<PiPhoneCallFill size={activeForm ? 30 : 24} />
				</div>
				<div
					className={`cursor-pointer p-2 sm:p-3 ${activeForm === 'email' ? 'bg-red-200 rounded-2xl' : ''}`}
					title='Написать email'
					onClick={() => setActiveForm('email')}
				>
					<CiMail size={activeForm ? 30 : 24} />
				</div>
				<div
					className={`cursor-pointer p-2 sm:p-3 ${activeForm === 'chat' ? 'bg-red-200 rounded-2xl' : ''}`}
					title='Оставить отзыв'
					onClick={() => setActiveForm('chat')}
				>
					<FaCommentDots size={activeForm ? 30 : 24} />
				</div>
			</div>

			{/* Форма — выезжает справа налево с анимацией */}
			<div
				className={`
          fixed top-0 right-0 h-full w-full sm:w-1/2 max-w-md z-20
          transition-transform duration-700 ease-in-out
          ${activeForm ? 'translate-x-0' : 'translate-x-full'}
          bg-white shadow-xl
        `}
			>
				{activeForm === 'call' && <CallForm onClose={closeForm} />}
				{activeForm === 'email' && <EmailForm onClose={closeForm} />}
				{activeForm === 'chat' && <ReviewForm onClose={closeForm} />}
			</div>

			{/* Полупрозрачный фон для закрытия — появляется плавно */}
			<div
				className={`
          fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-700
          ${activeForm ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
				onClick={closeForm}
			/>
		</div>
	)
}

export default BookingForm
