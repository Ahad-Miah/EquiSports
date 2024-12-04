import React from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Featured from '../Components/Featured/Featured';
import Reviews from '../Components/Reviews/Reviews';
import Product from '../Components/Product/Product';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
           <section>
            <Banner></Banner>
           </section>
           <section>
            <Categories></Categories>
           </section>
           <section>
            <Product></Product>
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