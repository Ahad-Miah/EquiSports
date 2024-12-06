import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/Authprovider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.init";

const provider=new GoogleAuthProvider();
const Login = () => {
  const {login,setLoading}=useContext(AuthContext);
  const location=useLocation();

    const[error,setError]=useState();
    const navigate=useNavigate();

        const handleLogin=(e)=>{
            e.preventDefault();
            const email=e.target.email.value;
            const password=e.target.password.value;

            login(email,password)
            .then(res => {
              e.target.reset();
              Swal.fire({
                title: "Login successfully!",
                text: "",
                icon: "success"
              });
              navigate(location?.state?location.state:'/');
            })
            .catch(err => {
              setLoading(false);
              Swal.fire({
                title: "Invalid Username or Password!",
                text: "",
                icon: "warning"
              });
            });
        }

        // handle google login

        const handleGoogleLogin=()=>{
          signInWithPopup(auth,provider)
          .then(res=>{
            navigate(location?.state?location.state:'/');
          })
        }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
        <h1 className='text-2xl font-bold text-center'>Login</h1>
        <form onSubmit={handleLogin} className="card-body">
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
            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            <label className="label">
              <a href="#" className="text-black font-semibold">New to Website? <Link to='/register'><span className='hover:text-pink-600 underline'>Register</span></Link> </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className=''>
            <p className='text-red-600'>{error ? error : ""}</p>
          </div>
        </form>
        <div className='px-8 pb-8'>
          <div className="divider">OR</div>
          <div className="form-control mt-6">
            <button onClick={handleGoogleLogin}  className="btn btn-primary bg-slate-700 hover:bg-green-800"><FcGoogle />Login With Google</button>
          </div>
        </div>
      </div>
    );
};

export default Login;