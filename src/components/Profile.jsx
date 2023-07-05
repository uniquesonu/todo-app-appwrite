import React, { useEffect, useState } from 'react'
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("User");
    const logoutAccount = async() =>{
        const user = account.get();
        const promise = account.deleteSession('current');
        promise.then(()=>{
            navigate('/')
        }).catch(err=>{
            alert(err)
        })
    }
    useEffect(()=>{
        const user = account.get();
        user.then((res)=>{
            setName(res.name)
        }).catch(()=>{
            navigate("/")
        })
    },[navigate])
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <a className="p-4 normal-case text-xl">Hi, {name}👋🏻</a>
  </div>
  
  <div className="navbar-end">
    <a className="btn btn-error p-4" onClick={logoutAccount}>Logout</a>
  </div>
</div>
  )
}

export default Profile