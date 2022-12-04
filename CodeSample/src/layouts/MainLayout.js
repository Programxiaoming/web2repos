import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function MainLayout() {
  const centerItem ={
    display:'flex',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'50px'
  }
  return (
    <div>
      <Navbar />
      <div style={centerItem}><Outlet /></div>
      <Footer />
    </div>
  )
}

export default MainLayout