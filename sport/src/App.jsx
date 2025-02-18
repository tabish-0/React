import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, Cricket, Contact, Country, ErrorPage } from './pages'
import AppLayout from './components/Layout/AppLayout'
import CountryDetails from './components/Layout/CountryDetails.jsx'
import CricketDetails from './components/Layout/CricketDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'cricket',
        element: <Cricket />
      },
      {
        path: 'country',
        element: <Country />
      },
      {
        path: 'country/:id',
        element: <CountryDetails />
      },
      {
        path: 'cricket/:id',
        element: <CricketDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App