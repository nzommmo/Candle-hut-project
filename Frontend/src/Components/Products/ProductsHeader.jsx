// ProductsHeader.js
import React from 'react';
import { useUser } from '../UserContext';  // Import useUser hook

const ProductsHeader = () => {
  const { user } = useUser();  // Destructure user from useUser

  return (
    <div className='sticky'>
      <div className='bg-neutral-800'>
        <div className='flex items-center gap-5 justify-end'>
          <p>{user ? user.username : 'Guest'}</p>  {/* Display username if user is logged in */}
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
