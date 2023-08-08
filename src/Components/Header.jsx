import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center w-full h-full">
        <div className="mb-4 sm:mb-0">
          <Link to="/" className="block">
            <img src={Logo} alt="Logo" className="mx-auto w-[130px] h-auto sm:w-[200px] sm:h-auto lg:w-[200px] lg:h-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/LogIn"

          >
            <button className="hover:text-violet-900 transition sm:flex sm:justify-between sm:items-center">Log In</button>
          </Link>
          <Link
            to="/SignUp"

          >
            <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition sm:flex sm:justify-between sm:items-center">Sign Up</button>

          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
