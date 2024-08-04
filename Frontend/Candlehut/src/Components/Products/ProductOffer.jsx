import React from 'react';
import image1 from "../../assets/1.jpeg";
import {Asterisk} from "lucide-react"

const ProductOffer = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between border rounded'>
        <div className='px-3'>
            <p className='text-5xl'>Offer On Selected Items</p>
            <p>From As Low as  <span className='text-customGreen text-3xl'>kshs  900 </span> </p>
            
            <div className='flex items-center justify-between'>
                <div>
                <h2 className='pt-2'>Select Items</h2>
      <ul className='pt-3'>
        <li className='flex items-center'><Asterisk /> Vanilla</li>
        <li className='flex items-center'><Asterisk /> Strawberry</li>
        <li className='flex items-center'><Asterisk /> Mango</li>
        <li className='flex items-center'><Asterisk /> Mahogany</li>
      </ul>

                </div>
                <div>
                <button className='bg-customGreen px-3 py-1 rounded-md text-3xl'>Order Now </button>
    
                </div>
       
            

            </div> 
      

        </div>
     <div className='bg-cover bg-auto  h-[400px] w-[500px] rounded' style={{ backgroundImage: `url(${image1})` }}>
        
     
     
     </div>
     

        </div>

        

    </div>
  );
}

export default ProductOffer;
