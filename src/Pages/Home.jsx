import React from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
           <section>
            <Banner></Banner>
           </section>
           <section>
            <Categories></Categories>
           </section>
        </div>
    );
};

export default Home;