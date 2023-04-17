import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './AddContact.css'
import {  useNavigate, } from 'react-router-dom'
import { addUser } from '../../redux/reducers/contactReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function AddContact() {

    const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [ number,setNumber] = useState('')
  const users = useSelector((state)=>  state.users); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit =(event) =>{
    event.preventDefault();
    dispatch(addUser({id: users[users.length -1].id + 1,name,email,number}))
    navigate('/');
  }
    return (
        <div className='addpage'>
        <Sidebar/>
          <div className="addcontact__form">
            <h2>ADD CONTACT</h2>
            <form onSubmit={handleSubmit}>
                <div className='form_group'>
                    <input onChange={e=> setName(e.target.value)} type="text" placeholder='Name' className='form_control' required  />
                </div>
                <div className='form_group'>
                    <input onChange={e=> setEmail(e.target.value)} type="email" placeholder='Email' className='form_control' required  />
                </div>
                <div className='form_group'>
                    <input  onChange={e=> setNumber(e.target.value)} type="tel" placeholder='Phone Number' className='form_control' required  />
                </div>
                <div className='form_group'>
                    <input type="submit" value="Submit" className='form_submit' required />
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default AddContact
