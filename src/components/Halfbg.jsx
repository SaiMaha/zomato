import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Halfbg = () => {
  return (
    <>
      {/* Background Image */}
      <div className="w-full overflow-hidden relative">
        <img 
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" 
          className="w-full h-[65vh] scale-110 object-cover"
          alt="Background"
        />
      </div>

      {/* Text and Search Bar */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center pb-[300px]">
        <h1 className="text-8xl font-bold italic">zomato</h1>
        <p className="text-4xl mt-2">Discover the best food & drinks in your city</p>

        {/* Search Bar */}
        <div className="mt-10 w-[850px] h-[55px] bg-white p-3 rounded-lg shadow-lg flex items-center gap-3">
          
          {/* Location Selector */}
          <div className="flex items-center gap-2 px-3">
            <IoLocationSharp size={24} className="text-red-500" />
            <select className="text-black bg-transparent outline-none">
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* Search Icon & Input */}
          <div className="flex items-center w-full">
            <CiSearch size={24} className="text-gray-500 mx-2" />
            <input 
              type="text" 
              placeholder="Search for restaurants, cuisine or a dish" 
              className="w-full p-2 text-black placeholder-gray-500 outline-none"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Halfbg;
