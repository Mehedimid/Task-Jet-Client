import React from 'react';
import { Outlet } from 'react-router-dom';
import DashNav from '../Dashboard/dash navbar/DashNav';
import Footer from '../footer/Footer';
import DashHome from '../Dashboard/DashHome';

function Dashboard(props) {
    return (
        <div>
            <DashNav></DashNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;