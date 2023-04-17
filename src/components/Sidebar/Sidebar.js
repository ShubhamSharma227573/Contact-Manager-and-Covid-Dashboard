import React from 'react'
import './Sidebar.css'
import SidebarRow from '../Sidebar Rows/SidebarRow'
import BookIcon from '@mui/icons-material/Book';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { Link } from 'react-router-dom';
function Sidebar() {
  
  return (
    <div className='sidebar'>
    <Link to='/'style={{textDecoration:'none'}}>
    <SidebarRow Icon={BookIcon} title="Contact" />
    </Link>
      
    <Link to='/covid' style={{textDecoration:'none'}}>
      <SidebarRow Icon={CoronavirusIcon} title="Covid" />
      </Link>
    </div>
  )
}

export default Sidebar
