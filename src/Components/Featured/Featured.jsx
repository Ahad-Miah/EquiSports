import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
const Featured = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-8 mb-14 mt-14 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Featured Equipment</h2>
        <p className="text-xl">Explore our best-selling sports gear and equipment!</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Product Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={img1}
            alt="Treadmill"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-2xl font-semibold mb-2">Treadmill</h3>
            <p className="text-gray-600 mb-4">A high-performance treadmill with multiple speeds.</p>
            <p className="text-xl text-red-500 font-bold mb-4">$299.99</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={img2}
            alt="Exercise Cycle"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-2xl font-semibold mb-2">Exercise Cycle</h3>
            <p className="text-gray-600 mb-4">Perfect for home workouts and calorie burning.</p>
            <p className="text-xl text-red-500 font-bold mb-4">$199.99</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={img3}
            alt="Yoga Mat"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-2xl font-semibold mb-2">Yoga Mat</h3>
            <p className="text-gray-600 mb-4">Comfortable and durable yoga mats for your exercises.</p>
            <p className="text-xl text-red-500 font-bold mb-4">$29.99</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={img4}
            alt="Basketball"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-2xl font-semibold mb-2">Basketball</h3>
            <p className="text-gray-600 mb-4">High-quality basketball for every player.</p>
            <p className="text-xl text-red-500 font-bold mb-4">$39.99</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Featured;