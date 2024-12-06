import customer1 from '../../assets/customer1.avif'
import customer2 from '../../assets/customer2.avif'
import customer3 from '../../assets/customer3.avif'
const Reviews = () => {
    return (
      <section className="bg-gray-100 py-12 mb-14 rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
            <img
              className="w-16 h-16 rounded-full mx-auto object-cover"
              src={customer1}
              alt="Customer 1"
            />
            <p className="text-lg text-gray-600 mt-4">
              "Amazing experience! Best sports equipment I’ve purchased."
            </p>
            <p className="font-semibold mt-2">John D.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
            <img
              className="w-16 h-16 rounded-full mx-auto object-cover"
              src={customer2}
              alt="Customer 2"
            />
            <p className="text-lg text-gray-600 mt-4">
              "Great customer support and quality gear!"
            </p>
            <p className="font-semibold mt-2">Sarah P.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm">
            <img
              className="w-16 h-16 rounded-full mx-auto object-cover"
              src={customer3}
              alt="Customer 3"
            />
            <p className="text-lg text-gray-600 mt-4">
              "Fast delivery and amazing prices!"
            </p>
            <p className="font-semibold mt-2">Mike L.</p>
          </div>
        </div>
      </div>
    </section>
    
    );
};

export default Reviews;