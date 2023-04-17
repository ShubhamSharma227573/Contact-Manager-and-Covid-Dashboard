import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Contact from './components/Contact manager/Contact'
import './MainPage.css'
function MainPage() {
  return (
    <div className='mainpage'>
      <Sidebar/>
      <Contact/>
    </div>
  )
}

export default MainPage
