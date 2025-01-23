import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {useNavigate} from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const LogoutHandler = () => {
        authService.logout().then( () => {
            dispatch(logout())  // isse store update ho jayega
            navigate('/login')
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-red-400 rounded-full' onClick={LogoutHandler}>Logout</button>
  )
}

export default LogoutBtn