import React, { useState } from 'react';
import image from '../image/list.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="col-span-2">
      {/* Header with menu icon */}
      <div className="flex justify-between items-center p-4 bg-gray-700 md:bg-gray-700">
        <div className="text-3xl font-bold text-white">The Untold</div>
        <div className="md:hidden">
        <img
            src={image}
            alt="Menu"
            onClick={toggleMenu}
            className="cursor-pointer w-8 h-8"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="px-4 py-2 m-1 text-black bg-blue-300 rounded hover:bg-blue-700 cursor-pointer">Home</Link>
          <Link to="/post" className="px-4 py-2 m-1 text-black bg-blue-300 rounded hover:bg-blue-700 cursor-pointer">post</Link>
          <Link to="/Saved" className="px-4 py-2 m-1 text-black bg-blue-300 rounded hover:bg-blue-700 cursor-pointer">Saved</Link>
          <Link to="/About" className="px-4 py-2 m-1 text-black bg-blue-300 rounded hover:bg-blue-700 cursor-pointer">About</Link>
          <Link to="/SignIn" className="px-4 py-2 m-1 text-black bg-blue-300 rounded hover:bg-blue-700 cursor-pointer">SignIn</Link>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isMenuOpen && (
        <aside className="fixed top-0 left-0 w-3/4 h-full bg-gray-800 text-white z-50 transform translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="p-4">
            <button onClick={toggleMenu} className="text-xl text-white">X</button>
            <div className="mt-8 space-y-4">
              <div className="px-4 py-2 bg-blue-400 rounded hover:bg-blue-700 cursor-pointer">Home</div>
              <div className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer">Post</div>
              <div className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer">Saved</div>
              <div className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer">about</div>
              <div className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer">SignIn</div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Header;
