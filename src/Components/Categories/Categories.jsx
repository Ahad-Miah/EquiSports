import { useEffect, useState } from "react";

const Categories = ({handleCategory}) => {

  const[categoriess,SetCategories]=useState();

    useEffect(()=>{
      fetch('https://assignment-10-server-lovat-two.vercel.app/categories')
      .then(res=>res.json())
      .then(data=>SetCategories(data));
    },[])
    return (
        <section className="py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">Sports Categories</h2>
          <p className="text-lg">Browse through our wide range of sports equipment!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categoriess?.map((category) => (
            <div class="relative flex items-center justify-center p-2">
            <div class="transform transition duration-500 hover:scale-125 flex justify-center items-center">
            <div key={category.name} className="flex flex-col items-center justify-center">
              <div onClick={()=>handleCategory(category.name)} className="w-24 h-24  rounded-full flex items-center justify-center mb-4">
                <img src={category.image} alt={category.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Categories;