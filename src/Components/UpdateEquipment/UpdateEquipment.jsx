import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateEquipment = () => {

    const equipment=useLoaderData();
    const[singleEquipment,setSingleEquipment]=useState(equipment);
    const handleAddEquipment=(e)=>{
        e.preventDefault();
        const form = e.target;

        const image = form.photo.value;
        const name = form.name.value;
        const category = form.category.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const description = form.description.value;

        const itemInfo = { image, name, category, stockStatus, price, rating, customization, time, description};

        fetch(`http://localhost:5000/products/${singleEquipment._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(itemInfo)
        })
        .then(res=>res.json())
        .then(result=>{
            form.reset(); 
             if(result.acknowledged){
                    Swal.fire({
                        title: "Updated Successfully!",
                        text: "",
                        icon: "success"
                      });
                }
               
        }
           );
    }
    return (
        <div className='w-full mx-auto border p-6 my-12'>

        <h1 className='font-bold text-[#3A3B98] text-4xl text-center mb-3'>Update Equipment</h1>
        <form onSubmit={handleAddEquipment}>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    Image
                    <input
                        type="text"
                        name='photo'
                        defaultValue={singleEquipment?.image}
                        placeholder="Image Url"
                        className="input input-bordered input-info w-full" />
                </div>
                <div className='w-full font-semibold'>
                    Item Name
                    <input
                        type="text"
                        name='name'
                        defaultValue={singleEquipment?.name}
                        placeholder="Item Name"
                        className="input input-bordered input-info w-full" />
                </div>

            </div>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    Category Name
                    <input
                        type="text"
                        name='category'
                        defaultValue={singleEquipment?.category}
                        placeholder="Category Name"
                        className="input input-bordered input-info w-full" />
                </div>
                <div className='w-full font-semibold'>
                    Stock Status
                    <input
                        type="text"
                        name='stockStatus'
                        defaultValue={singleEquipment?.stockStatus}
                        placeholder="Stock Status"
                        className="input input-bordered input-info w-full" />
                </div>

            </div>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    Price
                    <input
                        type="text"
                        name='price'
                        defaultValue={singleEquipment?.price}
                        placeholder="Price"
                        className="input input-bordered input-info w-full" />
                </div>
                <div className='w-full font-semibold'>
                    Rating
                    <input
                        type="text"
                        name='rating'
                        defaultValue={singleEquipment?.rating}
                        placeholder="Rating"
                        className="input input-bordered input-info w-full" />
                </div>
            </div>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    Customization (bat with extra grip, hit paper etc)
                    <input
                        type="text"
                        name='customization'
                        defaultValue={singleEquipment?.customization}
                        placeholder="Customization"
                        className="input input-bordered input-info w-full" />
                </div>
                <div className='w-full font-semibold'>
                    Processing Time (delivery time)
                    <input
                        type="time"
                        name='time'
                        defaultValue={singleEquipment?.time}
                        className="input input-bordered input-info w-full" />
                </div>

            </div>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    <h1>Description</h1>
                    <textarea
                        name='description'
                        defaultValue={singleEquipment?.description}
                        className="textarea w-full textarea-info" placeholder="Add Description"></textarea>
                </div>

            </div>
            <div className='flex justify-between gap-4 w-full'>

                <div className='w-full font-semibold'>
                    <button className="btn w-full btn-outline btn-primary">Update</button>
                </div>

            </div>
        </form>
    </div>
    );
};

export default UpdateEquipment;