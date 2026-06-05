import { createContext, useContext } from 'react'

const NavbarContext = createContext(null)

// Кастомный хук для удобного использования контекста
// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => {
	const context = useContext(NavbarContext)
	if (!context) {
		throw new Error('useNavbar must be used within a NavbarProvider')
	}
	return context
}

export default NavbarContext
