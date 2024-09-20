import React from 'react'
import Hero_Section_Lable from "./Hero_Section_Lable";

import hero_image from "../assets/images/hero_image.png"

const Hero_Section = () => {
  return (
    <section>
        <div>
        <div className="bg-[F2F0F1] relative pt-4 pb-20 lg:pt-4">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <h1 className="sm:mx-auto lg:mx-1 sm:w-10/12 md:w-2/ font-black text-black text-2xl text-left sm:text-5xl md:text-6xl lg:w-1/2 lg:text-left xl:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            <div className="lg:flex">
                <div className="relative mt-4 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                    <p className="sm:text-lg lg:w-11/12">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                        <a aria-label="add to slack" href="#" className="px-8 py-3 border border-gray-200 bg-black dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                            <div className="flex justify-center space-x-4">
                                <span className="font-medium dark:text-white">Shop Now</span>
                            </div>
                        </a>        
                    </div>
                    <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    </div>
                </div>
                <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                    <div className="relative w-full">
                        {/* <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div> */}
                        <img src={hero_image} className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Hero_Section_Lable />
    </section>
  )
}

export default Hero_Section