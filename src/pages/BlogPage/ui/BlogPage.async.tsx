import { lazy } from 'react'

export const BlogPageAsync = lazy(() => import('./BlogPage'))

// export const BlogPageAsync = lazy(() => new Promise((resolve) => {
// 	// @ts-ignore
// 	setTimeout(() => resolve(import('./BlogPage')), 1500)
// }))
