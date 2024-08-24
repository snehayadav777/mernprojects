import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
const NAV=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
           <img alt="logo" className="logo" src={logo} />
            { auth ?
            <ul className='nav-ul nav-right'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
                
            </ul>
            :<ul className='nav-ul nav-right'> 
                 <li><Link to="/signup">sign up</Link></li>
                   <li><Link to="/login">Login</Link></li>
              </ul>
              }
        </div>
    )
}
export default NAV;