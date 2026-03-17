import { RouteProps } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
	AppRoutes,
	getRouteBlog,
	getRouteEmployer,
	getRouteMain,
} from '@/shared/const/router'
import { BlogPage } from '@/pages/BlogPage'
import { EmployerPage } from '@/pages/EmployerPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.BLOG]: {
		path: getRouteBlog(),
		element: <BlogPage />,
	},
	[AppRoutes.EMPLOYER]: {
		path: getRouteEmployer(),
		element: <EmployerPage />,
	},

	// last
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />,
	},
}
