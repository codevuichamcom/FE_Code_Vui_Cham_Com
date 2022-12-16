import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('~/pages/Home'))
const ProfilePage = lazy(() => import('~/pages/Profile'))
const LearningPage = lazy(() => import('~/pages/Learning'))
import './global.scss'
import 'react-circular-progressbar/dist/styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/learning',
    element: <LearningPage />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
