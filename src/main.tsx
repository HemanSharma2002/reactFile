import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Admin from './components/Admin.tsx'
import Products from './components/products.tsx'
import Orders from './components/orders.tsx'
import DashboardPage from './components/DashboardPage.tsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/admin' element={<Admin/>}>
        <Route path='' element={<DashboardPage/>}/>
        <Route path='product' element={<Products/>}/>
        <Route path='order' element={<Orders/>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
