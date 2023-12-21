import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
          
        </div>
    );
}

export default Layout;