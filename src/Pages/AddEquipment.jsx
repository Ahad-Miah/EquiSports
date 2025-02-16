import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/Authprovider';
import { Helmet } from 'react-helmet';
const AddEquipment = () => {

    const{user}=useContext(AuthContext);
    // console.log(user);
    const userEmail=user?.email;
    const userName=user?.displayName;
    console.log(userEmail,userName);
    const handleAddEquipment = (e) => {
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

        const itemInfo = { image, name, category, stockStatus, price, rating, customization, time, description,userEmail,userName };

        console.log(itemInfo);
            fetch(`https://assignment-10-server-lovat-two.vercel.app/products`,{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(itemInfo)
            })
            .then(res=>res.json())
            .then(result=>{
                form.reset();  
                 if(result.insertedId){
                        Swal.fire({
                            title: "Added Successfully!",
                            text: "",
                            icon: "success"
                          });
                    }
                   
            }
               );

    }

    const now = new Date();
    const hours = now.getHours() % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return (
        <div className='w-full mx-auto border p-6 my-12'>
            <Helmet>
                <title>Add Equipment || EquiSport</title>
            </Helmet>

            <h1 className='font-bold text-[#3A3B98] text-4xl text-center mb-3'>Add Equipment</h1>
            <form onSubmit={handleAddEquipment}>
                <div className='flex justify-between gap-4 w-full'>

                    <div className='w-full font-semibold'>
                        Image
                        <input
                            type="text"
                            name='photo'
                            placeholder="Image Url"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div className='w-full font-semibold'>
                        Item Name
                        <input
                            type="text"
                            name='name'
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
                            placeholder="Category Name"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div className='w-full font-semibold'>
                        Stock Status
                        <input
                            type="text"
                            name='stockStatus'
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
                            placeholder="Price"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div className='w-full font-semibold'>
                        Rating
                        <input
                            type="text"
                            name='rating'
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
                            placeholder="Customization"
                            className="input input-bordered input-info w-full" />
                    </div>
                    <div className='w-full font-semibold'>
                        Processing Time (delivery time)
                        <input
                            type="time"
                            name='time'
                            defaultValue={`${hours}:${minutes}`}
                            className="input input-bordered input-info w-full" />
                    </div>

                </div>
                <div className='flex justify-between gap-4 w-full'>

                    <div className='w-full font-semibold'>
                        <h1>Description</h1>
                        <textarea
                            name='description'
                            className="textarea w-full textarea-info" placeholder="Add Description"></textarea>
                    </div>

                </div>
                <div className='flex justify-between gap-4 w-full'>

                    <div className='w-full font-semibold'>
                        <button className="btn w-full btn-outline btn-primary">Add Item</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddEquipment;