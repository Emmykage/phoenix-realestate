import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/users'
import Loader from '../loader/Loader'
import { updateUser } from '../../redux/users/users'

const AccountSettings = () => {
    const dispatch = useDispatch()
    const {user, loading} = useSelector(state => state.users)
    useEffect(()=> {
        dispatch(getUser())
    },[])
    const handleUpdate = (e)=> {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

    }
    const handleInput = (e) => {
        dispatch(updateUser(e))
    }

    if(loading) {
        return(<Loader/>)
    } else{
        return (
    <div className='account-settings w-max-800 m-auto p-3'>
        <form onSubmit={handleUpdate}>
            <div className=''>

       
            <div className='flex  gap-3'>
                <div className='flex-1'>
                    <label htmlFor="">First Name</label>
                    <input type='text' value={user.first_name} name="first_name" onChange={handleInput} />
                </div>
                <div className='flex-1'>
                    <label htmlFor="">Last Name</label>
                    <input type='text' value={user.last_name} name="last_name" onChange={handleInput} />
                </div>
            </div>
            <div>
            <div><label htmlFor="">Email</label>
                <input type='text' value={user.email} name="email" />
                </div>
            </div>
            <button  type='submit' className='bg-primary-light p-1 border-none block w-full'>Submiit</button>
            </div>
        </form>
    </div>
  )
    }
}

export default AccountSettings