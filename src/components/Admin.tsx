import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './dashboard'

type Props = {}

export default function Admin({}: Props) {
  return (
    <div className=' w-full bg-red-300'>
        <div className=' flex flex-row'>
        <div className=' w-1/4'>
        <Dashboard />
        </div>
        <div className=' w-3/4'>
        <Outlet/>
        </div>
        </div>
    </div>
  )
}