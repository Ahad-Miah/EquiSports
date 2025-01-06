import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLyout = () => {
    return (
        <div>
            <nav className='w-full sticky z-10 top-0'>
            <Navbar></Navbar>
            </nav>
            <section className='max-w-[100%] mx-auto'>
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLyout;