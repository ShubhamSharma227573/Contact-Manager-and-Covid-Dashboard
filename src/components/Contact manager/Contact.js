import React from 'react'
import './Contact.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'; 
import { deleteUser } from '../../redux/reducers/contactReducer';

function Contact() {
  const users = useSelector((state)=> state.users) 
  const dispatch = useDispatch();
  
  const handleDelete =(id)=>{
    dispatch(deleteUser({id:id}))

  }
  return (
    <div className='contactpage'>
      <h1>Welcome To Contact Management System</h1>
      <Link to="/add">
        <Button className='contactpage__button' variant="contained">Add Contact</Button>
      </Link>
      <table className='contactpage__table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>{user.email}</td>
              <td>
              <Link to={`/edit/${user.id}`}>
              <Button className='contactpage__edit' variant="contained">Edit</Button>
              </Link>
              <Button onClick={()=> handleDelete(user.id)} className='contactpage__delete' variant="contained">Delete</Button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Contact
