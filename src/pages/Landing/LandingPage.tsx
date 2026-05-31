import { useState, type SetStateAction, useEffect } from 'react'

function LandingPage() {
	const [data, setData] = useState<
		{ name: string; id: number; checked: boolean }[]
	>([])
	const [inputValue, setInputValue] = useState('')
	const [value, setValue] = useState<number | null>(null)
	const [secondInpValue, setSecondInputValue] = useState('')

	// Загрузка данных из localStorage при монтировании компонента
	useEffect(() => {
		const savedData = localStorage.getItem('todoList')
		if (savedData) {
			setData(JSON.parse(savedData))
		} else {
			// Начальные данные, если в localStorage ничего нет
			const initialData = [
				{ name: 'купить соль', id: 1, checked: false },
				{ name: 'купить хлеб', id: 2, checked: false },
				{ name: 'купить молоко', id: 3, checked: false },
			]
			setData(initialData)
			localStorage.setItem('todoList', JSON.stringify(initialData))
		}
	}, [])

	// Сохранение данных в localStorage при их изменении
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(data))
	}, [data])

	const handleClick = () => {
		const newData = { name: inputValue, id: Date.now(), checked: false }
		setData(prev => [...prev, newData])
		setInputValue('')
	}

	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setInputValue(e.target.value)
	}

	const handleDelete = (id: number) => {
		const SortedArray = data.filter(el => el.id !== id)
		setData(SortedArray)
	}

	const handleCheck = (id: number) => {
		const newArray = data.map(el => {
			if (el.id === id) {
				return { ...el, checked: !el.checked }
			}
			return { ...el }
		})
		setData(newArray)
	}

	const handleEdit = (id: number, name: string) => {
		setValue(id)
		setSecondInputValue(name)
	}

	const secondHandleClick = (id: number) => {
		const newArray = data.map(el => {
			if (el.id === id) {
				return { ...el, name: secondInpValue }
			}
			return { ...el }
		})

		setData(newArray)
		setValue(null)
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4'>
			<div className='max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6'>
				<h1 className='text-2xl font-bold text-gray-800 text-center'>
					Список покупок
				</h1>

				{/* Поле ввода и кнопка */}
				<div className='flex gap-2'>
					<div className='flex-1'>
						<input
							type='text'
							value={inputValue}
							onChange={handleChange}
							placeholder='Добавить товар...'
							className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all'
						/>
					</div>
					<button
						onClick={handleClick}
						className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
						disabled={!inputValue.trim()}
					>
						Добавить
					</button>
				</div>

				{/* Список элементов */}
				<div className='space-y-3'>
					{data.length === 0 ? (
						<p className='text-center text-gray-500 py-8'>
							Список пуст. Добавьте первый товар!
						</p>
					) : (
						data.map(i => (
							<div
								key={i.id}
								className={`p-4 rounded-xl border transition-all duration-200 ${
									i.checked
										? 'bg-green-50 border-green-200'
										: 'bg-white border-gray-200 hover:border-indigo-300'
								}`}
							>
								<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
									<div className='flex items-center space-x-3 flex-1 min-w-0'>
										{i.id === value ? (
											// Режим редактирования
											<div className='w-full'>
												<input
													type='text'
													value={secondInpValue}
													onChange={event =>
														setSecondInputValue(event.target.value)
													}
													className='w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
												/>
												<div className='mt-2 flex space-x-2'>
													<button
														onClick={() => secondHandleClick(i.id)}
														className='px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors'
													>
														OK
													</button>
													<button
														onClick={() => setValue(null)}
														className='px-3 py-1 bg-gray-400 text-white text-sm rounded-lg hover:bg-gray-500 transition-colors'
													>
														Отмена
													</button>
												</div>
											</div>
										) : (
											<>
												<input
													type='checkbox'
													checked={i.checked}
													onChange={() => handleCheck(i.id)}
													className='h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer flex-shrink-0'
												/>
												<div className='flex items-center space-x-3 flex-1 min-w-0'>
													{/* ... */}
													<span
														className={`text-gray-700 ${
															i.checked
																? 'line-through text-green-600 opacity-70'
																: ''
														} break-all`}
													>
														{i.name}
													</span>
												</div>
											</>
										)}
									</div>

									{/* Кнопки действий */}
									{i.id !== value && (
										<div className='flex space-x-2 shrink-0 self-start sm:self-center'>
											<button
												onClick={() => handleEdit(i.id, i.name)}
												className='p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none'
												title='Редактировать'
											>
												✏️
											</button>
											<button
												onClick={() => handleDelete(i.id)}
												className='p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none'
												title='Удалить'
											>
												✕
											</button>
										</div>
									)}
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default LandingPage
