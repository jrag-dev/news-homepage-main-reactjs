import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './HeaderComponent.scss';

export function HeaderComponent() {
	
	const [openMenu, setOpenMenu] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)
	
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
		if (width >= 768) {
			setOpenMenu(false)
		}
	}, [width])
	
	const handleOpenMenuClick = () => {
		setOpenMenu(!openMenu)
	}
	
	return (
		<header className="header">
			<nav className="header-nav container">
				<figure className="logo">
					<img className="logo-img" src="images/logo.svg" alt="logo icon"/>
				</figure>

				<button
					className="btn-menu"
					onClick={handleOpenMenuClick}
				>
					<img className="btn-hamburger" src="images/icon-menu.svg" alt="hamburger icon"/>
				</button>

				<div className={`nav-menu ${openMenu ? 'is-active' : ''}`}>
					<div className="nav-menu-container">
						<button
							className="btn-menu"
							onClick={handleOpenMenuClick}
						>
							<img className="btn-close" src="images/icon-menu-close.svg" alt="close menu icon"/>
						</button>
						<ul className="menu-list">
							<li>
								<Link to="#">Home</Link>
							</li>
							<li>
								<Link to="#">New</Link>
							</li>
							<li>
								<Link to="#">Popular</Link>
							</li>
							<li>
								<Link to="#">Trending</Link>
							</li>
							<li>
								<Link to="#">Categories</Link>
							</li>
						</ul>
					</div>	
				</div>	
			</nav>
		</header>
	)
}