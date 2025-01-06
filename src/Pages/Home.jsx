import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Featured from '../Components/Featured/Featured';
import Reviews from '../Components/Reviews/Reviews';
import Product from '../Components/Product/Product';
import { Helmet } from 'react-helmet';

const Home = () => {
    const[categoresss,setcategoriesss]=useState();
    const[data,setData]=useState();

    const handleCategory=(name)=>{
       setcategoriesss(name);
    }
    useEffect(()=>{
        fetch(`https://assignment-10-server-lovat-two.vercel.app/products/category/${categoresss}`)
        .then(res=>res.json())
        .then(data=>setData(data));
    },[categoresss])
    return (
        <div className=''>
            <Helmet>
                <title>Home || Equisport</title>
            </Helmet>
           <section>
            <Banner></Banner>
           </section>
           <section className='max-w-[90%] mx-auto'>
            <Categories handleCategory={handleCategory}></Categories>
           </section>
           <section className='max-w-[90%] mx-auto'>
            <Product data={data}></Product>
           </section>
           <section className='max-w-[90%] mx-auto'>
            <Featured></Featured>
           </section>
           <section className='max-w-[90%] mx-auto'>
            <Reviews></Reviews>
           </section>
        </div>
    );
};

export default Home;