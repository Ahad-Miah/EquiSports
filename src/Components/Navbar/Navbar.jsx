import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoh.png'

const Navbar = () => {
    return (
        <div className="navbar  px-6 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-white btn-ghost md:hidden">
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
              <NavLink to={'/AddEquipment'}>
           <li className='text-[#2D3097] font-semibold'><a>Add Equipment</a></li>
           </NavLink>
           <NavLink to={'/MyEquipmentList'}>
           <li className='text-[#2D3097] font-semibold'><a>My equipment List</a></li>
           </NavLink>
            </ul>
          </div>
            <Link to='/'>
            <div className='w-[170px] h-[100px] flex items-center justify-center my-auto'>
            <img className='w-full object-cover' src={logo} alt="" />
            </div>
            </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
           <NavLink to={'/'}>
           <li className='text-[#2D3097] font-semibold'><a>Home</a></li>
           </NavLink>
           <NavLink to={'/AllSportsEquipment'}>
           <li className='text-[#2D3097] font-semibold'><a>All Sports Equipment</a></li>
           </NavLink>
              <NavLink to={'/AddEquipment'}>
           <li className='text-[#2D3097] font-semibold'><a>Add Equipment</a></li>
           </NavLink>
           <NavLink to={'/MyEquipmentList'}>
           <li className='text-[#2D3097] font-semibold'><a>My equipment List</a></li>
           </NavLink>
           
          </ul>
        </div>

        <div className="navbar-end">
        
             
             <div className='flex gap-2'>
            
            <Link><a  className="btn">Logout</a></Link>
            </div>
            
            <Link to='/login'><a className="btn">Login</a></Link>
        
        </div>

      </div>
    );
};

export default Navbar;