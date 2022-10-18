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
                        <button className='btn-logout' onClick={logOut}>Log out</button>
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