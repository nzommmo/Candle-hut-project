import React from 'react';

const ItemCard = ({ name, price, image }) => {
  // Construct the image URL based on the relative path returned from the API
  const imageUrl = image ? `${image}` : ''; // Ensure the URL is correctly formatted

  return (
    <div className="bg-white border h-full w-[210px] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow my-10 mx-5">
      <div className='flex items-center justify-center'>
        <h2 className="text-xl text-black flex items-center justify-center font-semibold">
          {name}
        </h2>
      </div>
      <div className='flex items-center justify-center'>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-40 w-full object-cover rounded" />
        ) : (
          <p>No image available</p>
        )}
        
      </div>
      <div className='flex items-center justify-center pt-3'>
      <p className='text-black'>Ksh {price}</p>

      </div>

      <div className='flex items-center justify-center'>
        <button className="bg-green-500 my-1 text-white px-4  rounded hover:bg-green-600">
          View Health Benefits
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
