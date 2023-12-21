import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

function Layout(props) {
    return (
        <div>

            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
}

export default Layout;