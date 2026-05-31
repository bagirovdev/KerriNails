import { useState } from 'react'

interface EmailFormProps {
	onClose: () => void
}

function EmailForm({ onClose }: EmailFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		time: new Date().toLocaleString('ru-RU'),
	})
	const [isSending, setIsSending] = useState(false)
	const [message, setMessage] = useState('')

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const validateForm = (): boolean => {
		setMessage('')
		if (!formData.name.trim()) {
			setMessage('Пожалуйста, введите имя')
			return false
		}
		if (!formData.email.trim()) {
			setMessage('Пожалуйста, введите email')
			return false
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(formData.email)) {
			setMessage('Введите корректный email')
			return false
		}
		return true
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isSending) return
		if (!validateForm()) return

		setIsSending(true)
		setMessage('')

		// Здесь логика отправки email
		setTimeout(() => {
			setMessage('Сообщение успешно отправлено!')
			setFormData({
				name: '',
				email: '',
				message: '',
				time: new Date().toLocaleString('ru-RU'),
			})
			setTimeout(onClose, 2000)
			setIsSending(false)
		}, 1000)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='p-6 bg-white rounded-xl shadow-2xl w-1/2 h-full fixed right-0 top-0 flex flex-col'
		>
			<button
				type='button'
				onClick={onClose}
				className='float-right text-3xl cursor-pointer text-gray-500 mt-20 ml-auto'
			>
				×
			</button>
			<div className='flex-grow flex flex-col justify-center'>
				<h3 className='text-xl font-bold mb-4'>Написать email</h3>
				<p>Оставьте свои контакты и сообщение</p>
				<div className='mt-4'>
					<input
						type='text'
						name='name'
						placeholder='Имя'
						value={formData.name}
						onChange={handleChange}
						className='border p-3 mb-3 w-full rounded'
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						className='border p-3 mb-3 w-full rounded'
						required
					/>
					<textarea
						name='message'
						placeholder='Сообщение'
						value={formData.message}
						onChange={handleChange}
						className='border p-3 w-full rounded mb-4'
						rows={4}
						required
					/>
					<button
						type='submit'
						disabled={isSending}
						className={`px-4 py-2 rounded w-full cursor-pointer ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
					>
						{isSending ? 'Отправка...' : 'Отправить'}
					</button>
					{message && (
						<p
							className={`mt-2 text-center ${message.includes('успешно') ? 'text-green-600' : 'text-red-600'}`}
						>
							{message}
						</p>
					)}
				</div>
			</div>
		</form>
	)
}

export default EmailForm
