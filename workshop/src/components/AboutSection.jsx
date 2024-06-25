import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
const AboutSection = () => {
  return (
    <div>
      <h1 className="bg-custom-brown   text-center p-6 text-2xl font-bold ">
        A Workshop Designed For Student Entrepreneurs{" "}
        <b className="text-yellow-300">Seeking to achieved 1 Cr+</b> Sales in next 6
        months{" "}
      </h1>

      <h2 className="text-center md:text-xl p-6">
        {" "}
        Unlock the exclusive AI-driven framework empowered by 100+ Networking
        powerhouse strategies to earn <b className="text-yellow-300 ">
          1 Cr+
        </b>{" "}
        in the next <b className="text-yellow-300">6 months</b> with
        personalised leadership assesment toolkit
      </h2>
      <section
        // from-blue-50
        className=" pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40"
      >
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto  max-w-lg">
            <img
              className="w-full radius-yellow rounded-2xl border border-gray-100 shadow"
              src="/public\BishopsirAbout_section_workshop_image.png"
              alt=""
            />
          </div>{" "}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="p-2 title-font tracking-widest text-xl font-bold ">
              IGNITE YOUR LEADERSHIP PATH
            </h2>
            <h1 className="p-4">
              2-DAY LIVE WEEKEND WORKSHOP With <b>Mr.Bishop Adhikari </b> <br />
            </h1>
            {/* add point */}
            <div className="bg-custom-brown flex-col justify-center items-center p-4 rounded-3xl radius-yellow">
            <div className="sm:p-2 flex  items-center  space-x-2 mt-2">
              <div className="h-5 w-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div>
              <h1 className="sm:p-2 sm:text-xl ">
                Entreprenour Coach and social change advocate <br />
              </h1>
            </div>

            <div className="sm:p-2 flex items-center space-x-2 mt-2">
              <div className="h-5 w-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-4 w-4 font-bold text-white" />
              </div>
              <h1 className="sm:p-2 sm:text-xl">
                Discover what awaits you Unlocks 2 Days of Live <br />
              </h1>
            </div>



            <div className=" sm:p-2 flex items-center space-x-2 mt-2">
              <div className="h-5 w-5 mb-5 flex justify-center bg-green-500 rounded-full">
                <CheckIcon className="h-5 w-6 font-bold text-white" />
              </div>
              <h1 className=" sm:text-xl overflow-hidden">
              training Enpower Your Manangement,Entrepreneurship 
              ,Leadership and Social Impact Skills Workshop
              </h1>
            </div>

        
            </div>


             <h1 className="text-red-500 mt-4 font-bold text-xl"> Starts on Saturday 07/10/2023 
                {/* & 08/10/2023 */}
                | 6 AM - 7 PM</h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#razorpay">
            <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                <div className="flex">
                  <button className="bg-blue-500 text-white px-4  rounded-xl py-2    hover:text-gray-300 hover:bg-blue-600 focus:border">
                    REGISTER NOW @{" "}
                    <span className="line-through text-black">Rs.1,999/</span>{" "}
                    Rs.199/{" "}
                  </button>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* hh */}

     
    </div>
  );
};

export default AboutSection;
