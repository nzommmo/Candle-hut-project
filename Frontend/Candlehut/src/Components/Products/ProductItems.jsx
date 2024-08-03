import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import axios from 'axios';

const ProductItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {items.map(item => (
        <ItemCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image ? item.image.image : null}  // Ensure `image.image` contains the correct URL
        />
      ))}
    </div>
  );
};

export default ProductItems;
