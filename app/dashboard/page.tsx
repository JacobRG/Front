import React from 'react'
import SideNav from './components/SideNav'
import Products from './products'

const Dashboard = () => {
  return (
    <div className='flex items-start'>
        <Products />
    </div>
  )
}

export default Dashboard