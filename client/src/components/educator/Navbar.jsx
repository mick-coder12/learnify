

import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {
  const { isEducator } = useContext(AppContext);
  const { user } = useUser();

  return isEducator && user && (
    <div className={`h-16 sm:h-20 flex items-center justify-between px-4 md:px-8 border-b border-gray-500 ${bgColor}`}>
      <Link to="/">
        <img src={assets.learnify_logo} alt="Logo" className="w-16 lg:w-24" />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Hi! {user.fullName}</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
