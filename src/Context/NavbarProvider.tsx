import { createContext, useState, useContext } from 'react'
import NavbarContext from './NavbarContext'

export const NavbarProvider = ({ children }) => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)

	const value = {
		isNavbarOpen,
		setIsNavbarOpen,
	}

	return (
		<NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
	)
}
