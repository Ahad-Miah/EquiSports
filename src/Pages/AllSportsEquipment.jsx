import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSportsEquipment = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData?.map((data,idx) => (
                            <tr>
                                <th>{idx+1}</th>
                                <td>{data.name}</td>
                                <td>{data.category}</td>
                                <td>{data.price}</td>
                                <td>
                                <Link to={`/details/${data._id}`}>
                                <div className="badge font-semibold badge-secondary">View Details</div>
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