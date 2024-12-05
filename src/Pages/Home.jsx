import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Featured from '../Components/Featured/Featured';
import Reviews from '../Components/Reviews/Reviews';
import Product from '../Components/Product/Product';

const Home = () => {
    const[categoresss,setcategoriesss]=useState();
    const[data,setData]=useState();

    const handleCategory=(name)=>{
       setcategoriesss(name);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${categoresss}`)
        .then(res=>res.json())
        .then(data=>setData(data));
    },[categoresss])
    return (
        <div className='max-w-[90%] mx-auto'>
           <section>
            <Banner></Banner>
           </section>
           <section>
            <Categories handleCategory={handleCategory}></Categories>
           </section>
           <section>
            <Product data={data}></Product>
           </section>
           <section>
            <Featured></Featured>
           </section>
           <section>
            <Reviews></Reviews>
           </section>
        </div>
    );
};

export default Home;