import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HeaderComponent } from '../components/header/HeaderComponent'

import './LayoutPublic.scss'


export default function LayoutPublic() {
	
	return (
		<>
			<HeaderComponent/>
			<main className="main">
				<Outlet/>
			</main>
		</>
	)
}