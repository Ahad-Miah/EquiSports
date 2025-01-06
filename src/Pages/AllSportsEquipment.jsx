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
    
        // <div>
        //     <Helmet>
        //         <title>All Sports Equipment || EquiSport</title>
        //     </Helmet>
        //    <div className='flex justify-center'>
        //    <button onClick={handleSort} className='btn btn-primary'>Sort by price</button>
        //    </div>
        //     <div className="overflow-x-auto">
        //         <table className="table table-zebra w-full">
        //             <thead>
        //                 <tr className='text-center'>
        //                     <th className="p-2">#</th>
        //                     <th className="p-2">Name</th>
        //                     <th className="p-2">Category</th>
        //                     <th className="p-2">Price</th>
        //                     <th className="p-2">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     allEquipments?.map((data, idx) => (
        //                         <tr key={data._id} className="text-center">
        //                             <td className="p-2">{idx + 1}</td>
        //                             <td className="p-2">{data.name}</td>
        //                             <td className="p-2">{data.category}</td>
        //                             <td className="p-2">{data.price}</td>
        //                             <td className="p-2">
        //                                 <Link to={`/details/${data._id}`}>
        //                                     <div className="badge 
        //                                 text-[18px]
        //                                 md:font-semibold badge-secondary cursor-pointer"><span className='hidden md:block mr-2'>View</span>Details</div>
        //                                 </Link>
        //                             </td>
        //                         </tr>
        //                     ))
        //                 }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
<div className="min-h-screen bg-gray-100 p-4">
      <Helmet>
        <title>All Sports Equipment || EquiSport</title>
      </Helmet>
      <div className="flex justify-center my-6">
        <button onClick={handleSort} className="btn btn-primary">
          Sort by Price
        </button>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
          {allEquipments?.map((equipment, idx) => (
            <div
              key={equipment._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {equipment.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Category: {equipment.category}
                </p>
                <p className="text-xl font-bold text-blue-600 mt-4">
                  ${equipment.price}
                </p>
                <Link to={`/details/${equipment._id}`}>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    );
};

export default AllSportsEquipment;