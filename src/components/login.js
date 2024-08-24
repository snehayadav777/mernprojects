
import React, { useEffect } from 'react'
import '../App.css'; // This assumes App.css is in the src folder

import { useNavigate } from 'react-router-dom';
const Login =()=>{
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/")
        }
    })
    const handleLogin= async ()=>{
        console.warn("email,password",email,password)
        let result= await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result)
        if(result.auth){
          localStorage.setItem("user",JSON.stringify(result.user));
          localStorage.setItem("token",JSON.stringify(result.auth));
          navigate("/")
        }else{
            alert("Wrong email or password")
        }
    }
    return(
        <div className="auth-background">
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className='inputBox' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className='inputBox' placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className='appButton' type='button' >login</button>
        </div>
        </div>
    )
}
export default Login