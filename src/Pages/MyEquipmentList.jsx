import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import { IoTrashBinSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const MyEquipmentList = () => {
    const{user}=useContext(AuthContext);
    const[equipment,setEquipment]=useState();
    const email=user?.email;

    useEffect(()=>{
        fetch(`http://localhost:5000/products/email/${email}`)
        .then(res=>res.json())
        .then(data=>setEquipment(data));
    },[])
    return (
        <div className='grid md:grid-cols-2 gap-3 lg:grid-cols-3'>
        {
           equipment?.map((product) => (
                <div className="card card-compact h-[500px] bg-base-100  shadow-xl">
                    <figure className='h-[70%]'>
                        <img className='w-full h-full object-cover'
                            src={product.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name:{product.name}</h2>
                        <p className='font-semibold'>Price:{product.price}</p>
                        <div className="rating font-semibold items-center">
                            Rating:    
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                        </div>
                        <div className="card-actions justify-end items-center">
                            <div className="badge font-semibold badge-secondary">{product.stockStatus}</div>
                            <Link to={`/details/${product._id}`}>
                                <button className="btn "><TbListDetails /></button>
                            </Link>
                           <Link to={`/update/${product._id}`}>
                           <button className="btn"><FaUserEdit /></button>
                           </Link>
                            <button className="btn "><IoTrashBinSharp /></button>
                        </div>

                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default MyEquipmentList;