import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from '../layouts/LayoutPublic'
import NotFoundPage from '../pages/NotFoundPage'
import LandingPage from '../pages/LandingPage'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPublic/>,
		errorElement: <NotFoundPage/>,
		children: [
			{
				errorElement: <NotFoundPage/>,
				children: [
					{
						index: true,
						element: <LandingPage/>
					},
				]
			}
		]
	}
])