import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product=useLoaderData();
    return (
        <div className="hero bg-base-200">
          <Helmet>
            <title>Details || EquiSport</title>
          </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-[50%] lg:p-16">
          <img
            src={product.image}
            className="w-full h-full object-cover rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6">
             {product.description}
            </p>
            <p className="font-semibold">Category: {product.category}</p>
            <p className="font-semibold">Price: {product.price}</p>
            <p className="font-semibold">Status: {product.stockStatus}</p>
            <p className="font-semibold">Rating: {product.rating}</p>
            <p className="font-semibold">Customization: {product.customization}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Details;