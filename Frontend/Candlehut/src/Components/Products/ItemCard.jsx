import React from 'react';

const ItemCard = ({ name, price, image }) => {
  // Construct the image URL based on the relative path returned from the API
  const imageUrl = image ? `${image}` : ''; // Ensure the URL is correctly formatted
  // Construct the image URL based on the relative path returned from the API

  return (
    <div className="relative h-full w-[210px] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow my-2 mx-2">
      <div className="flex items-center justify-center">
        {/* Image Container */}
      </div>
      <div className="relative flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-40 w-full object-cover rounded" />
        ) : (
          <p>No image available</p>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded">
          <button className="text-white">Add to Cart</button>
        </div>
      </div>
      <h2 className="text-xl pt-3 text-white flex items-center justify-center font-semibold">
        {name}
      </h2>
      <div className="flex items-center justify-center pt-1">
        <p className="text-white">Ksh {price}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-green-500 my-1 text-white px-4 rounded hover:bg-green-600">
          Health Benefits
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
