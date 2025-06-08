

import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/educator/update-role`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`h-16 sm:h-20 flex items-center justify-between  px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32  border-b border-gray-500 ${
        isCoursesListPage ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      <img
        onClick={() => navigate('/')}
        src={assets.learnify_logo}
        alt="Logo"
        className="w-16 lg:w-24 cursor-pointer"
        
      />

      {/* Desktop */}
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={becomeEducator}>
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-4 py-1.5 rounded-full">
            Create Account
          </button>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          <button onClick={becomeEducator}>
            {isEducator ? 'Educator Dashboard' : 'Become Educator'}
          </button>
          |
          {user && <Link to="/my-enrollments">My Enrollments</Link>}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
