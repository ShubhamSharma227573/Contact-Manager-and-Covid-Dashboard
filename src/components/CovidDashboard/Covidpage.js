import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Coviddashboard from './Coviddashboard'
import './Covidpage.css'

function Covidpage() {
  return (
    
    <div className='covid_page'>
      <Sidebar/>
      <Coviddashboard/>
    </div>
  )
}

export default Covidpage
