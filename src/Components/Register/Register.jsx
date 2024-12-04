import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {

        const handleRegistration=(e)=>{
            e.preventDefault();

            const name=e.target.name.value;
            const email=e.target.email.value;
            const photo=e.target.photo.value;
            const password=e.target.password.value;

            console.log(name,email,photo,password);
        }

        //password eye button toggle
        const[active,setActive]=useState(true);
        const handleShow=()=>{
            setActive(!active);
        }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10 relative">
          <h1 className='text-2xl font-bold text-center'>Register</h1>
      <form onSubmit={handleRegistration} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Your name" className="input input-bordered" name='name' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo url" className="input input-bordered" name="photo" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={active?"password":"text"} placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
          <a href="#" className="text-black font-semibold">Already have an account ? <Link to='/login'><span className='hover:text-pink-600 underline'>Login</span></Link> </a>
        </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className='px-8 pb-8'>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary bg-slate-700 hover:bg-green-800"><FcGoogle />Login With Google</button>
        </div>
        </div>
      <div>
      <button onClick={handleShow} className="bg-white border-none btn absolute btn-xs bottom-[296px] left-72 md:left-72">{active?<FaEye />:<FaEyeSlash />}</button>
      </div>
    </div>
    );
};

export default Register;