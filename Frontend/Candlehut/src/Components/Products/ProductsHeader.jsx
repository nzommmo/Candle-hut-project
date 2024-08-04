// ProductsHeader.js
import React from 'react';
import { useUser } from '../UserContext';  // Import useUser hook
import { ShoppingBasketIcon } from 'lucide-react';


const ProductsHeader = () => {
  const { user } = useUser();  // Destructure user from useUser

  return (
    <div className='sticky'>
      <div className='bg-neutral-900  '>
      <p className='flex items-center px-2 justify-start text-xl absolute font-irishGrover'>AromaTherapy</p>

        <div className='flex items-center gap-5 justify-end me-5'>
          <p>{user ? user.username : 'Guest'}</p>  {/* Display username if user is logged in */}
          <ShoppingBasketIcon className=''/>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
