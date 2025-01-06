import bannerOne from '../../assets/ba1.jpg'
import bannerTwo from '../../assets/ba2.jpg'
import bannerThree from '../../assets/ba3.jpg'
import bannerFour from '../../assets/ba4.jpg'

const Banner = () => {
    return (
        <div className=''>
        <div className="carousel w-full md:w-full mx-auto  h-[400px] ">
            <div
             style={{ backgroundImage: `url(${bannerOne})` }}
            id="item1" className="carousel-item w-full bg-cover bg-center bg-opacity-5">
                <div 
                className={`w-1/2 mx-auto h-full flex flex-col items-center justify-center *:text-center space-y-4  *:text-white`}>

                    <h1 className='text-2xl md:text-5xl font-bold text-white'>Gear Up for Excellence!</h1>
                    <p className='font-semibold'>Discover top-notch sports equipment tailored for every athlete. From precision-crafted gear to performance-enhancing accessories, EquiSports has everything you need to conquer your game. Shop now and elevate your journey!</p>
                </div>
                
            </div>
            <div
             style={{ backgroundImage: `url(${bannerTwo})` }}
            id="item2" className="carousel-item w-full bg-cover bg-center">

                <div className='w-1/2 mx-auto h-full flex flex-col items-center justify-center *:text-center space-y-4 '>
                    <h1 className='text-2xl md:text-5xl font-bold text-white '>Unleash Your Potential!</h1>
                    <p className='text-white font-semibold'>Equip yourself with the finest sports gear for every discipline. Whether you're a beginner or a pro, EquiSports offers the tools to push your limits and achieve greatness. Explore our collection today!</p>
                </div>
               
            </div>
            <div 
             style={{ backgroundImage: `url(${bannerThree})` }}
            id="item3" className="carousel-item w-full bg-cover bg-center">
                <div className='w-1/2 mx-auto h-full flex flex-col items-center justify-center *:text-center space-y-4  *:text-white'>
                    <h1 className='text-2xl md:text-5xl  font-bold text-white'>Gear Up, Game On!</h1>
                    <p className='font-semibold'>Find premium sports equipment tailored to elevate your performance. From the field to the court, EquiSports has everything you need to stay ahead in the game. Shop now and dominate your sport!</p>
                </div>
                
            </div>
            <div
             style={{ backgroundImage: `url(${bannerFour})` }}
            id="item4" className="carousel-item w-full bg-cover bg-center">
                <div className='w-1/2 mx-auto flex flex-col items-center justify-center *:text-center  *:text-white'>
                    <h1 className='text-2xl md:text-5xl font-bold text-white'>Unleash Your Athletic Potential</h1>
                    <p className='font-semibold'>Explore top-tier sports gear and accessories designed to enhance your training and performance. Whether you're a pro or just starting, EquiSports equips you for success. Shop now for the best in sports equipment!</p>
                </div>
              
            </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </div>
    );
};

export default Banner;