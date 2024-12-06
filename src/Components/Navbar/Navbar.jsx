import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoh.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import profile from '../../assets/userProfile.webp';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import spinner from '../../assets/Lottie/Lottie.json'
import Lottie from "lottie-react";

const Navbar = () => {

    const { Signout, user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center w-full '>
            <Lottie animationData={spinner}></Lottie>
        </div>
    }
    return (
        <div className="navbar  px-2 md:px-14 py-2 border border-b-2 mb-5">
            <div className="navbar-start">
                <div className="drawer lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn bg-white btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side z-10">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content h-full w-64 sm:w-80 p-4">
                            <NavLink to={'/'}>
                                <li className="text-[#2D3097] font-semibold">
                                    <a>Home</a>
                                </li>
                            </NavLink>
                            <NavLink to={'/AllSportsEquipment'}>
                                <li className="text-[#2D3097] font-semibold">
                                    <a>All Sports Equipment</a>
                                </li>
                            </NavLink>
                            {user ? 
                                <>
                                    <NavLink to={'/AddEquipment'}>
                                        <li className="text-[#2D3097] font-semibold">
                                            <a>Add Equipment</a>
                                        </li>
                                    </NavLink>
                                    <NavLink to={'/MyEquipmentList'}>
                                        <li className="text-[#2D3097] font-semibold">
                                            <a>My Equipment List</a>
                                        </li>
                                    </NavLink>
                                </>
                             : ""
                             }
                        </ul>
                    </div>
                </div>
                <Link to="/">
                    <div className="flex items-center justify-center my-auto w-[120px] h-[60px] sm:w-[170px] sm:h-[100px]">
                        <img
                            className="w-full object-cover"
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/'}>
                        <li className='text-[#2D3097] font-semibold'><a>Home</a></li>
                    </NavLink>
                    <NavLink to={'/AllSportsEquipment'}>
                        <li className='text-[#2D3097] font-semibold'><a>All Sports Equipment</a></li>
                    </NavLink>
                    {
                        user ? <>
                            <NavLink to={'/AddEquipment'}>
                                <li className='text-[#2D3097] font-semibold'><a>Add Equipment</a></li>
                            </NavLink>
                            <NavLink to={'/MyEquipmentList'}>
                                <li className='text-[#2D3097] font-semibold'><a>My equipment List</a></li>
                            </NavLink> </> : ""
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex gap-2'>
                        <div data-tooltip-id="my-tooltip" data-tooltip-content={`${user.displayName}`} className='w-12 h-12  rounded-full'>
                            <Tooltip id="my-tooltip" />
                            <img className='w-full h-full object-cover rounded-full' src={user.photoURL ? user.photoURL : profile} alt="" />
                        </div>
                        <Link><a onClick={Signout} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Logout</a></Link>
                    </div>

                        : <>
                            <Link to='/login'><a className="btn mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">Login</a></Link>
                            <Link to='/register'><a className="btn bg-gradient-to-r from-blue-700 to-cyan-500 animate-pulse">Register</a></Link>
                        </>
                }

            </div>

        </div>
    );
};

export default Navbar;