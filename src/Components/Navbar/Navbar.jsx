import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/navlogo.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import profile from '../../assets/userProfile.webp';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import spinner from '../../assets/Lottie/Lottie.json'
import Lottie from "lottie-react";

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    const { Signout, user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center w-full '>
            <Lottie animationData={spinner}></Lottie>
        </div>
    }
    return (
      <div className="navbar px-2 md:px-14 py-2 border-b-2 mb-5">
  {/* Navbar Start */}
  <div className="navbar-start">
    {/* Drawer for small screens */}
    <div className="drawer lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
          className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content h-full w-64 sm:w-80 p-4">
          <NavLink to="/">
            <li className="text-[#0EA5E9] font-semibold">
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/AllSportsEquipment">
            <li className="text-[#0EA5E9] font-semibold">
              <a>All Sports Equipment</a>
            </li>
          </NavLink>
          {user && (
            <>
              <NavLink to="/AddEquipment">
                <li className="text-[#0EA5E9] font-semibold">
                  <a>Add Equipment</a>
                </li>
              </NavLink>
              <NavLink to="/MyEquipmentList">
                <li className="text-[#0EA5E9] font-semibold">
                  <a>My Equipment List</a>
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
    {/* Logo */}
    <Link to="/">
      <div className="flex items-center justify-center my-auto w-[100px] h-[50px] sm:w-[150px] sm:h-[75px] lg:w-[180px] lg:h-[90px]">
        <img
          className="max-w-full max-h-full object-contain"
          src={logo}
          alt="Logo"
        />
      </div>
    </Link>
  </div>

  {/* Navbar Center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to="/">
        <li className="text-[#0EA5E9] font-semibold">
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/AllSportsEquipment">
        <li className="text-[#0EA5E9] font-semibold">
          <a>All Sports Equipment</a>
        </li>
      </NavLink>
      {user && (
        <>
          <NavLink to="/AddEquipment">
            <li className="text-[#0EA5E9] font-semibold">
              <a>Add Equipment</a>
            </li>
          </NavLink>
          <NavLink to="/MyEquipmentList">
            <li className="text-[#0EA5E9] font-semibold">
              <a>My Equipment List</a>
            </li>
          </NavLink>
        </>
      )}
    </ul>
  </div>

  {/* Navbar End */}
  <div className="navbar-end flex items-center gap-4">
    {user ? (
      <div className="flex gap-2 items-center">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={`${user.displayName}`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
          <Tooltip id="my-tooltip" />
          <img
            className="w-full h-full object-cover rounded-full"
            src={user.photoURL || profile}
            alt="Profile"
          />
        </div>
        <Link>
          <button
            onClick={Signout}
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500">
            Logout
          </button>
        </Link>
      </div>
    ) : (
      <div className="flex gap-2">
        <Link to="/login">
          <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="btn bg-gradient-to-r from-blue-700 to-cyan-500 animate-pulse">
            Register
          </button>
        </Link>
      </div>
    )}
    {/* Dark/Light Theme Toggle */}
    <label onChange={handleToggle} className="swap swap-rotate">
      <input type="checkbox" />
      <svg
        className="swap-on h-8 w-8 sm:h-10 sm:w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
      <svg
        className="swap-off h-8 w-8 sm:h-10 sm:w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  </div>
</div>
    );
};

export default Navbar;