import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
           <img src={logo} alt="" srcset="" /> 
           <div>
            <Link to='/'>Shop</Link>
            <Link to="/Order">Order</Link>
         
            <Link to="/inventory">Inventory</Link>
           
            
            {
                    user?.uid ?
                        <>
                        <Link to='/dashboard'>DashBoard</Link>
                        <button  className='btn-logout bg-orange-500 ml-3 text-white p-1 rounded-lg' onClick={logOut}>Log out</button>
                        
                        </>
                      
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                }
           </div>
        </nav>
    );
};

export default Header;