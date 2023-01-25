import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-gray-100">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li className='bg-gray-300 rounded-lg'><Link to="/dashboard">Product List</Link></li>
                   
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;