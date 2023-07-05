import React from 'react'
import { useState } from 'react'
import { account, client } from '../appwrite/appwrite'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ID } from 'appwrite'

const Signup = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const createAccount=async()=>{
    const promise = account.create(
      ID.unique(),
      email,
      password,
      name
  );
  promise.then((response)=>{
    console.log(response)
    navigate("/login")
  }).catch(err=>{
    alert(err);
  })
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Join the TodoNinja Community!</h1>
      <p className="py-6">Experience seamless organization, productivity, and collaboration in one powerful application. Sign up now and embark on your journey towards a more efficient and organized life.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          placeholder="Enter your name" 
          className="input input-bordered"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          placeholder="email" 
          className="input input-bordered"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          placeholder="password" 
          className="input input-bordered" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={createAccount}>Signup</button>
        </div>
        <span className='text-center'>
        Already have an account?
        <br/>
        <Link to={"/login"}  className="link">Login Instead</Link>
       </span>
      </div>
      {name}{email}{password}
    </div>
  </div>
</div>
  )
}

export default Signup