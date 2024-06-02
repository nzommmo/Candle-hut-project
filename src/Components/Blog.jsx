import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg"
import image3 from "../assets/3.jpeg"



const Blog = () => {
  return (

    <div className='mt-10 flex flex-col items-center justify-center'>
        <h2 className='tracking-wider'>Most 
            {" "}
            <span className='text-customGreen'>
            Popular
            </span>
            
            </h2>
        <div className='flex flex-row align-center justify-center gap-5'>
            <div className='rounded-lg w-1/4 h-3/4 border border-neutral-100 mx-3 my-4'>
            <img src={image1} className="h-full"/>

            </div>
            <div className='rounded-lg w-1/4 h-1/4 border border-neutral-100 mx-2 my-4'>
            <img src={image3} className=""/>

            </div>

        </div>

    </div>
  )
}

export default Blog