import React from 'react'
import Header from '../Header/Header'
import NavBar from '../Header/NavBar'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<NavBar />
			{children}
		</div>
	)
}

export default Layout
