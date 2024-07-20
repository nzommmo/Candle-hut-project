
const Footer = () => {
  return (
    <div className="mt-10 rounded-md w-full border px-3  me-20">
      <div className='mx-5 flex flex-row align-center justify-center gap-8 md:gap-20' >
          <div className="">
            <h3 className="hover:underline text-lg flex flex-row align-center justify-center">Socials</h3> 
            <hr className="w-full"/>

            <ul className="flex flex-col mt-2 gap-5 ">
            <li><a href="#" className="hover:text-customGreen"> Instagram</a></li>
            <li><a href="#" className="hover:text-customGreen">Facebook</a></li>
            <li><a href="#" className="hover:text-customGreen">Tiktok</a></li>
            </ul>

          </div>
          <div>
            <h3 className="text-lg flex flex-row align-center justify-center">Location</h3>
            <hr className="w-full bg:neutral"/>
            <ul className="flex flex-col  mt-2 w-full gap-5">
            <li><a href="#" className="hover:text-white">Mshumaa House</a></li>
            <li><a href="#" className="hover:text-customGreen"> Lenana Road - Off Waiyaki Way</a></li>
            <li><a href="#" className="hover:text-customGreen">Nairobi, Kenya</a></li>
            </ul>
          </div>

          <div>
          <h3 className="text-lg flex flex-row align-center justify-center">Reviews</h3>
            <hr className="w-full"/>

            <h2 className="mt-2 mb-2">Leave Us a Review</h2>
            <textarea  className="rounded-md bg-white text-black"  name="" id="" cols="20" rows="5"></textarea>
            <button className="bg-customGreen text-black px-5 rounded">Send</button>
          </div>
        </div>

      </div>
  )
}

export default Footer