import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('./pages/HomePage'))

import './global.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>About page</h1>
        <Link to={'/'}>Go to home page</Link>
      </div>
    )
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
