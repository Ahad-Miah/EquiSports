import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {
    const allData = useLoaderData();
    const[allEquipments,setAllEquipments]=useState(allData);
    const[sort,setSort]=useState();

    useEffect(()=>{
        fetch(`https://assignment-10-server-lovat-two.vercel.app/products/sort`)
        .then(res=>res.json())
        .then(data=>setSort(data));
    },[])

    const handleSort = () => {
        setAllEquipments(sort);
      };
    return (
        
        <div>
            <Helmet>
                <title>All Sports Equipment || EquiSport</title>
            </Helmet>
           <div className='flex justify-center'>
           <button onClick={handleSort} className='btn btn-primary'>Sort by price</button>
           </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-center'>
                            <th className="p-2">#</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEquipments?.map((data, idx) => (
                                <tr key={data._id} className="text-center">
                                    <td className="p-2">{idx + 1}</td>
                                    <td className="p-2">{data.name}</td>
                                    <td className="p-2">{data.category}</td>
                                    <td className="p-2">{data.price}</td>
                                    <td className="p-2">
                                        <Link to={`/details/${data._id}`}>
                                            <div className="badge 
                                        text-[18px]
                                        md:font-semibold badge-secondary cursor-pointer"><span className='hidden md:block mr-2'>View</span>Details</div>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default AllSportsEquipment;