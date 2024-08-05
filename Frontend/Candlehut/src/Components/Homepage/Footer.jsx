import CopyrightFooter from "../Products/CopyrightFooter";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { Building2Icon } from "lucide-react";
import { CornerUpRight } from "lucide-react";
import { Globe2Icon } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-10 rounded-md w-full border px-3">
      <div className="mx-5 flex flex-col md:flex-row align-center justify-center gap-8 md:gap-20">
        <div className="">
          <h3 className="hover:underline text-lg flex flex-row align-center justify-center">Socials</h3>
          <hr className="w-full" />

          <ul className="flex flex-col mt-2 gap-5">
            <li><a href="#" className="flex gap-2 hover:text-customGreen"><InstagramIcon /> Candle_Hut</a></li>
            <li><a href="#" className="flex gap-2 hover:text-customGreen"><Facebook /> CandleHut_KE</a></li>
            <li><a href="#" className="flex gap-2 hover:text-customGreen"><Twitter /> CandleHut</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg flex flex-row align-center justify-center">Location</h3>
          <hr className="w-full bg:neutral" />
          <ul className="flex flex-col mt-2 w-full gap-5">
            <li><a href="#" className="hover:text-white"><Building2Icon />Mshumaa House</a></li>
            <li><a href="#" className="hover:text-customGreen"><CornerUpRight />Lenana Road - Off Waiyaki Way</a></li>
            <li><a href="#" className="hover:text-customGreen"><Globe2Icon />Nairobi, Kenya</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg flex flex-row align-center justify-center">Reviews</h3>
          <hr className="w-full" />

          <h2 className="mt-2 mb-2">Leave Us a Review</h2>
          <textarea className="rounded-md bg-white text-black" name="" id="" cols="30" rows="5"></textarea>
          <div>
            <button className="bg-customGreen text-black px-5 float-right my-2 rounded">Send</button>
          </div>
        </div>
      </div>
      <CopyrightFooter/>

    </div>
  )
}

export default Footer
