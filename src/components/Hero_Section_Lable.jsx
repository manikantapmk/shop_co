import React from "react";

const Hero_Section_Lable = () => {
  return (
    <div className="py-10 relative bg-black sm:py-12 lg:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center  ">
        <div className=" grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4  ">
          <div className="bg-white h-12 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-6 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
              alt=""
            />
          </div>

          <div className="bg-white h-12 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
              alt=""
            />
          </div>

          <div className="bg-white h-12 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full h-8 mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
              alt=""
            />
          </div>

          <div className="bg-white h-12 flex shadow-lg items-center justify-center">
            <img
              className="object-contain w-full mx-auto h-7"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section_Lable;
