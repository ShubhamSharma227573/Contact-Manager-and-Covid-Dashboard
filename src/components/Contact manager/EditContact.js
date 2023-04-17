import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './EditContact.css'
import { updateUser } from '../../redux/reducers/contactReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



function EditContact() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const { name, email, number } = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const [unumber, setNumber] = useState(number)
  const dispatch =useDispatch();
  const navigate = useNavigate();

  const handleUpdate =(event)=>{
    event.preventDefault();
    dispatch(updateUser({
      id:id,
      name:uname,
      email:uemail,
      number:unumber,
    }))
    navigate('/');
  }

  return (
    <div className='editpage'>
      <Sidebar />
      <div className="editpage_form">
        <h2>EDIT</h2>
        <form onSubmit={handleUpdate}>
          <div className='form_group'>
            <input onChange={e => setName(e.target.value)} value={uname} type="text" placeholder='Name' className='form_control' required />
          </div>
          <div className='form_group'>
            <input onChange={e => setEmail(e.target.value)} value={uemail} type="email" placeholder='Email' className='form_control' required />
          </div>
          <div className='form_group'>
            <input onChange={e => setNumber(e.target.value)} value={unumber} type="tel" placeholder='Phone Number' className='form_control' required />
          </div>
          <div className='form_group'>
            <input type="submit" value="Update" className='form_update' required />
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditContact
