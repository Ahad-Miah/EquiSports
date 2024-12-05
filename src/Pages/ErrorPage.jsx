import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
              <div className="text-center">
                <h1 className="text-9xl font-bold text-white animate-bounce">404</h1>
                <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
                  Oops! Page Not Found
                </h2>
                <p className="mt-4 text-lg text-white/80 sm:text-xl">
                  The page you’re looking for doesn’t exist or has been moved.
                </p>
                <div className="mt-6">
                  <Link to="/">
                    <button className="px-6 py-3 font-semibold text-purple-600 bg-white rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                      Go Back Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        };
        
export default ErrorPage;