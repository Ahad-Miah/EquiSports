import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleView=(id)=>{
        console.log(id);
    }
    return (
       <div className='grid md:grid-cols-2 gap-3 lg:grid-cols-3'>
        {
            products?.map((product) => (

                <div className="card card-compact h-[500px] bg-base-100  shadow-xl">
                <figure className='h-[70%]'>
                    <img className='w-full h-full object-cover'
                        src={product.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name:{product.name}</h2>
                    <p className='font-semibold'>Price:{product.price}</p>
                    <Link onClick={()=>handleView(product._id)}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                    </Link>
                </div>
            </div>
            ))
        }
       </div>
    );
};

export default Product;