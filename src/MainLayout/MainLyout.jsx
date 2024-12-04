import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLyout = () => {
    return (
        <div>
            <nav className='w-full'>
            <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLyout;