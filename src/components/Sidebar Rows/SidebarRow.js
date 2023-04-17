import React from 'react'
import './SidebarRow.css'


function SidebarRow({ selected , Icon, title }) {
  return (
    <div className={`row ${selected && "selected"}`}>
    <Icon className="row__Icon"/>
      <h2 className='row__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow 
