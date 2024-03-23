import React from 'react'
import {useDispatch} from 'react-redux'
import { logout } from '../../store/authSlice'


function LogoutButton() {
  const dispatch = useDispatch();

  const logoutEvent = ()=>{
    dispatch(logout())
  }

  return (
    <button
     onClick={logoutEvent}
     className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutButton