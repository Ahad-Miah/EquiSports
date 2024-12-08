import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Product = ({data}) => {

    const [products, setProducts] = useState();
        useEffect(() => {
                fetch('https://assignment-10-server-lovat-two.vercel.app/products')
                .then(res => res.json())
                .then(data => setProducts(data.slice(0,6)));  
        }, [])
      
    return (
        <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-3'>
            {
               (data && data.length > 0 ? data : products)?.map((product) => (
                    <div className="card rounded-none card-compact h-[500px] bg-base-100 p-5 shadow-xl transition-transform transform hover:scale-105">
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
                                <div className={`badge font-semibold badge-secondary ${product?.stockStatus=="Available"?"animate-bounce":""}`}>{product.stockStatus}</div>
                                <Link to={`/details/${product._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;