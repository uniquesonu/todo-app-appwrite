import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwrite/appwrite';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const loginAccount = async() => {
    const promise = account.createEmailSession(
      email,
      password
  );
  
  promise.then(function (response) {
      navigate("/todos")
  }, function (error) {
      console.log(error);
  });
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Welcome back, TodoNinja!</h1>
      <p className="py-6">Welcome back, TodoNinja! Access your personalized dashboard and stay on top of your tasks with ease. Log in to continue your productive journey, where you can manage, prioritize, and conquer your to-do list like a true ninja. Let's get started!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
          <button className="btn btn-primary" onClick={loginAccount}>Login</button>
        </div>
       <span className='text-center'>
        Didn't have an account?
        <br/>
        <Link to={"/signup"} className="link">Signup Instead</Link>
       </span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login