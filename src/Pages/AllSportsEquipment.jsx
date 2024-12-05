import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {
    const allData = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData?.map((data, idx) => (
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

    );
};

export default AllSportsEquipment;