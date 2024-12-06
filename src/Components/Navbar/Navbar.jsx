import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoh.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import profile from '../../assets/userProfile.webp';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const{Signout,user,loading}=useContext(AuthContext);
    if(loading){
        return <div className='flex justify-center items-center'>
            <span className="loading mx-auto loading-spinner text-neutral"></span>
        </div>
    }
    return (
        <div className="navbar  px-2 md:px-14 py-2 border border-b-2 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-white btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to={'/'}>
           <li className='text-[#2D3097] font-semibold'><a>Home</a></li>
           </NavLink>
           <NavLink to={'/AllSportsEquipment'}>
           <li className='text-[#2D3097] font-semibold'><a>All Sports Equipment</a></li>
           </NavLink>
           {
            user? <>
            <NavLink to={'/AddEquipment'}>
           <li className='text-[#2D3097] font-semibold'><a>Add Equipment</a></li>
           </NavLink>
           <NavLink to={'/MyEquipmentList'}>
           <li className='text-[#2D3097] font-semibold'><a>My equipment List</a></li>
           </NavLink> </> : ""
            
           }  
            </ul>
          </div>
            <Link to='/'>
            <div className='w-[170px] h-[100px] flex items-center justify-center my-auto'>
            <img className='w-[100px] md:w-full object-cover' src={logo} alt="" />
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
            user? <>
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
            user? <div className='flex gap-2'>
            <div data-tooltip-id="my-tooltip" data-tooltip-content={`${user.displayName}`} className='w-12 h-12  rounded-full'>
            <Tooltip id="my-tooltip" />
              <img className='w-full h-full object-cover rounded-full' src={user.photoURL?user.photoURL:profile} alt="" />
            </div>
            <Link><a onClick={Signout} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Logout</a></Link>
            </div>

            :<>
             <Link to='/login'><a className="btn mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">Login</a></Link>
             <Link to='/register'><a className="btn bg-gradient-to-r from-blue-700 to-cyan-500 animate-pulse">Register</a></Link>
            </>
           
            
          }
        
        </div>

      </div>
    );
};

export default Navbar;